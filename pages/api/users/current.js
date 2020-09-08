import { ObjectID } from 'mongodb';
import DB from '../../../utils/db';
import auth from '../../../utils/auth';
import { _Error, errorHandler } from '../../../utils/error';

const handler = async (req, res) => {
	try {
		const db = await DB();
		const users = db.collection('users');
		const user = await users.findOne({
			_id: new ObjectID(req.user_id),
		}, {
			projection: {
				name: 1,
				_id: 0,
			},
		});
		if (user === null) {
			return errorHandler(res, new _Error('User Does not exist', 404));
		}
		return res.send(user);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
};
export default auth(handler);
