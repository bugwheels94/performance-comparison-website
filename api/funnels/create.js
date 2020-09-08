import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import { Validator } from 'jsonschema';

const validator = new Validator();

export default auth(async (req, res) => {
	const {
		query: { team, project },
	} = req;
	try {
		const { body } = req;
		const funnel = {
			id: '/Funnel',
			type: 'array',
			required: true,
			additionalProperties: false,
			items: {
				type: 'object',
				additionalProperties: false,
				properties: {
					type: {
						enum: ['contains', 'regex', 'ends', 'starts', 'exact'],
					},
					value: {
						type: 'string',
					},
				},
				required: ['type', 'value'],
			},
		};
		const validatorResult = validator.validate(body, funnel);
		if (validatorResult.errors.length) {
			const e = validatorResult.errors;
			return errorHandler(
				res,
				new _Error(`${e[0].property} ${e[0].message}`, 400, e),
			);
		}
		const db = await DB();
		const $teams = db.collection('teams');
		const $team = await $teams.findOne({
			name: team,
			writers: new ObjectID(req.user_id),
		}, {
			projection: { _id: 1 },
		});
		if ($team === null) {
			return errorHandler(res, new _Error(`Access Denied: ${team}`, 403));
		}
		const $projects = db.collection('projects');
		const $project = await $projects.findOneAndUpdate({
			team: $team._id,
			name: project,
		}, {
			$push: {
				funnels: {
					_id: new ObjectID(),
					body,
				},
			},
		}, {
			projection: { _id: 0, funnels: 1 },
		});
		if ($project.value === null) {
			return errorHandler(
				res,
				new _Error(`Not found: ${team}/${project}`, 404),
			);
		}
		return res.status(200).send('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
