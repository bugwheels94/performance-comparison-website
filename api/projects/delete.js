import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const { team, project } = req.query;
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const teamRecord = await teamsCollection.updateOne({
			name: team,
			admins: new ObjectID(req.user_id),
		}, {
			$pull: {
				projects: { name: project }
			}
		});
		if (teamRecord.result.ok !== 1) {
			return errorHandler(res, new _Error('Some Error', 500));
		}
		if (teamRecord.result.nModified === 0) {
			return errorHandler(res, new _Error('Not Found', 404));
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
