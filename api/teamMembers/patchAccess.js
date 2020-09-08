import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const { role } = req.body;
	if (['readers', 'writers', 'admins'].indexOf(role) === -1) {
		return errorHandler(res, new _Error(`Role Undefined: ${role}`, 422));
	}
	const {
		query: { team, member },
	} = req;
	if (member === req.user_id) {
		return errorHandler(res, new _Error(`Cannot Change Your own Access: ${team}`, 422));
	}
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const bulk = $teams.initializeOrderedBulkOp();
		const _id = new ObjectID(member);
		bulk.find({
			name: team,
			admins: new ObjectID(req.user_id),
		}).updateOne({
			$pull: {
				admins: _id,
				writers: _id,
				readers: _id,
			},
		});
		const $addToSet = {
			readers: _id,
			[role]: _id
		};
		if (role === 'admins') {
			$addToSet.writers = _id;
		}
		bulk.find({
			name: team,
			admins: new ObjectID(req.user_id),
		}).updateOne({ $addToSet })
		const $team = await bulk.execute();
		if ($team.result.nMatched === 0) {
			return errorHandler(res, new _Error(`Missing Team: ${team}`, 422));
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
