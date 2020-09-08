import { ObjectID } from 'mongodb';
import JSONStream from 'JSONStream';
import DB from '@/utils/db';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';

export default auth(async (req, res) => {
	const {
		team, limit, offset, name,
	} = req.query;
	try {
		const db = await DB();
		const query = {
			readers: new ObjectID(req.user_id),
		};
		if (team != null) {
			query.name = team;
		}
		const teamsCollection = db.collection('teams');
		const $skip = Number.isNaN(offset) ? 0 : Number(offset || 0);
		const $limit = Number.isNaN(limit) ? 0 : Number(limit || 10);
		const pipeline = [{
			$match: query,
		}, { $unwind: '$projects' }];
		if (name && name.trim() !== '') {
			query['projects.name'] = { $regex: `^${name}` };
			pipeline.push({
				$match: {
					'projects.name': { $regex: `^${name}` },
				},
			});
		}
		pipeline.push({ $skip }, { $limit }, {
			$project: {
				_id: 0,
				readers: 0, 
				writers: 0,
				admins:0 
			}
		});
		const projectRecords = teamsCollection.aggregate(pipeline);
		res.setHeader('Content-Type', 'application/json');
		return projectRecords.stream().pipe(JSONStream.stringify()).pipe(res);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
