import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const { team, member } = req.query;
	if (member === req.user_id) {
		return errorHandler(res, new _Error(`Cannot remove yourself`, 422));
	}
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const _id = new ObjectID(member);
		const teamRecord = await teamsCollection.updateOne({
			name: team,
			admins: new ObjectID(req.user_id),
		}, {
			$pull: {
				readers: _id,
				writers: _id,
				admins: _id,
			},
		});
		if (teamRecord.result.n === 0) {
			return errorHandler(res, new _Error('Not Found', 404));
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
