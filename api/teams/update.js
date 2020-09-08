import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import validate from './validations';

export default auth(async (req, res) => {
	const { team } = req.query;
	const validationResult = validate(req.body)
	if (validationResult) {
		return errorHandler(res, new _Error(validationResult, 422))
	}
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const $team = await $teams.updateOne({
			name: team,
			admins: new ObjectID(req.user_id),
			isIndividual: false,
		}, {
			$set: req.body
		});
		if ($team.result.n === 0) {
			return errorHandler(res, new _Error(`Team Missing: ${team}`, 404));
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
