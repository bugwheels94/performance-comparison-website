import { ObjectID } from 'mongodb';
import JSONStream from 'JSONStream';
import DB from '@/utils/db';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';

async function getTeams(req, res) {
	const {
		write, limit, offset, name,
	} = req.query;
	const $skip = Number.isNaN(offset) ? 0 : Number(offset || 0);
	const $limit = Number.isNaN(limit) ? 0 : Number(limit || 10);
	let query;
	if (write) {
		query = {
			writers: new ObjectID(req.user_id),
		};
	} else {
		query = {
			readers: new ObjectID(req.user_id),
			isIndividual: false,
		};
	}
	if (name && name.trim() !== '') {
		query.name = { $regex: `^${name}` };
	}
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const teamRecords = teamsCollection.find(query, {
			projection: {
				name: 1,
				_id: 0,
				isIndividual: 1,
			},
		}).skip($skip).limit($limit);
		res.setHeader('Content-Type', 'application/json');
		return teamRecords.stream().pipe(JSONStream.stringify()).pipe(res);
	} catch (e) {
		if (e.code === 11000) {
			return errorHandler(res, new _Error('Team Name Already exists', 409, e));
		}
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
}
export default auth(getTeams);
