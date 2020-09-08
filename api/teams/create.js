import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import validate from './validations';

export default auth(async (req, res) => {
	const { name } = req.body;
	const validationResult = validate(req.body)
	if (validationResult) {
		return errorHandler(res, new _Error(validationResult, 422))
	}
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const id = [new ObjectID(req.user_id)];
		await $teams.insertOne({
			name,
			readers: id,
			admins: id,
			writers: id,
			isIndividual: false,
			projects: [],
		});
		return res.status(200).send('OK');
	} catch (e) {
		if (e.code === 11000) {
			return errorHandler(res, new _Error('Not Available', 409, e));
		}
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
