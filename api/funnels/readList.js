
import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const {
		query: {
			team, project, limit, offset,
		},
	} = req;
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const $team = await $teams.findOne({
			name: team,
			readers: new ObjectID(req.user_id),
		}, {
			projection: { _id: 1 },
		});
		if ($team === null) {
			return errorHandler(res, new _Error(`Access Denied: ${team}`, 403));
		}
    const $projects = db.collection('projects');
		const $project = await $projects.findOne({
			team: $team._id,
			name: project,
		}, { projection: { _id: 0, funnels: { $slice: [Number(offset), Number(limit)] } } });
		if ($project === null) {
			return errorHandler(
				res,
				new _Error(`Not found: ${team}/${project}`, 404),
			);
		}
		return res.status(200).json($project.funnels);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
