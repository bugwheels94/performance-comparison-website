import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import { Validator } from 'jsonschema';

const validator = new Validator();

export default auth(async (req, res) => {
	const {
		query: { team, project, funnel },
	} = req;
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const $team = await $teams.findOne({
			name: team,
			writers: new ObjectID(req.user_id),
		}, {
			projection: { _id: 1 },
		});
		if ($team === null) {
			return errorHandler(res, new _Error(`Access Denied: ${team}`, 403));
		}
		const $projects = db.collection('projects');
		const $project = await $projects.findOneAndUpdate({
			team: $team._id,
			name: project,
		}, {
			$pull: {
				funnels: {
					_id: new ObjectID(funnel),
				},
			},
		}, {
			projection: { _id: 0, funnels: 1 },
		});
		if ($project.value === null) {
			return errorHandler(
				res,
				new _Error(`Not found: ${team}/${project}`, 404),
			);
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
