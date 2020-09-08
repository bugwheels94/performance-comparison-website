import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import validate from './validations';

export default auth(async (req, res) => {
	const { email, role } = req.body;
	const { team } = req.query;
	const validationResult = validate(req.body)
	if (validationResult) {
		return errorHandler(res, new _Error(validationResult, 422))
	}
	try {
		const db = await DB();
		const usersCollection = db.collection('users');
		const userRecord = await usersCollection.findOneAndUpdate({
			email,
		}, {
			$setOnInsert: {
				email,
			},
		}, {
			returnOriginal: false,
			upsert: true,
		});
		const userID = userRecord.value._id
		const teamsCollection = db.collection('teams');
		const $addToSet = {
			readers: userID,
			[role]: userID
		};
		if (role === 'admins') {
			$addToSet.writers = userID
		}
		const teamRecord = await teamsCollection.updateOne({
			name: team,
			admins: new ObjectID(req.user_id),
		}, { $addToSet });
		if (teamRecord.result.n === 0) {
			return errorHandler(res, new _Error(`Missing Team: ${team}`, 422));
		}
		if (teamRecord.result.nModified === 0) {
			return errorHandler(res, new _Error('Already Exists', 422));
		}
		return res.status(200).json({ _id: userID });
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
