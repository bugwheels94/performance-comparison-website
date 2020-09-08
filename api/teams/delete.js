import { ObjectID } from 'mongodb';
import validator from 'validator';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

async function deleteTeam(req, res) {
	const { team } = req.query;
	if (validator.isEmpty(team)) {
		return errorHandler(res, new _Error('Team Name Missing', 422));
	}
	try {
		const db = await DB();
		const $teams = db.collection('teams');
		const $team = await $teams.deleteOne({
			name: team,
			admins: new ObjectID(req.user_id),
			isIndividual: false,
		});
		if ($team.result.n === 0) {
			return errorHandler(res, new _Error('Team Missing', 404));
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
}
export default auth(deleteTeam);
