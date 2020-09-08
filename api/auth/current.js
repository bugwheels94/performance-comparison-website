import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	try {
		const db = await DB();
		const users = db.collection('users');
		const $user = await users.findOne(
			{ _id: new ObjectID(req.user_id) },
			{
				projection: {
					hash: 0,
				},
			},
		);
		if ($user == null) {
			return errorHandler(res, new _Error('Either User does not exist or you dont have permission', 422));
		}
		return res.status(200).send($user);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
