import { ObjectID } from 'mongodb';
import validator from 'validator';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const {
		query: { team },
	} = req;
	if (validator.isEmpty(team)) {
		return errorHandler(res, new _Error('Team Name Missing', 422));
	}
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const $team = await $teams.findOne({
			name: team,
			readers: new ObjectID(req.user_id),
			isIndividual: false,
		});
		if ($team === null) {
			return res.status(403).send('Forbidden');
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
