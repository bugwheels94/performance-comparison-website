import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const { team, project } = req.query;
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const projectRecord = await teamsCollection.findOne({
			name: team,
			readers: new ObjectID(req.user_id),
			'projects.name': project
		}, {
			projection: { _id: 0, 'projects.$': 1 },
		});
		if (projectRecord === null) {
			return errorHandler(res, new _Error('Not Found', 404));
		}
		return res.status(200).json(projectRecord.projects[0]);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
