import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import JSONStream from 'JSONStream';

const roles = ['admins', 'writers', 'readers'];
export default auth(async (req, res) => {
	const {
		team, limit, offset, name, role, email,
	} = req.query;
	const query = {};
	if (name && name.trim() !== '') {
		query.name = { $regex: `^${name}` };
	}
	if (email && email.trim() !== '') {
		query.email = { $regex: `^${email}` };
	}
	if (roles.indexOf(role) === -1) {
		return errorHandler(res, new _Error('Invalid Role', 422));
	}
	const $skip = Number.isNaN(offset) ? 0 : Number(offset || 0);
	const $limit = Number.isNaN(limit) ? 0 : Number(limit || 10);
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const teamRecord = await teamsCollection.findOne({
			name: team,
			readers: new ObjectID(req.user_id),
		}, {
			projection: {
				[role]: 1,
			},
		});
		if (teamRecord === null) {
			return errorHandler(res, new _Error('Team Not Found', 404));
		}
		const usersCollection = db.collection('users');
		query._id = { $in: teamRecord[role] };
		const userRecords = usersCollection.find(query, {
			email: 1,
			_id: 1,
			name: 1,
		}).skip($skip).limit($limit);
		return userRecords.stream().pipe(JSONStream.stringify()).pipe(res);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
