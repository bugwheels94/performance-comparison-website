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
		const listSchema = {
			type: 'array',
			required: true,
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
		const settings = {
			id: '/Settings',
			type: 'object',
			properties: {
				allowAll: {
					type: 'string',
					required: true,
					enum: ['whitelist', 'blacklist'],
				},
				whitelist: listSchema,
				blacklist: listSchema,
			},
			additionalProperties: false,
		};
		const validatorResult = validator.validate(req.body, settings);
		if (validatorResult.errors.length) {
			const e = validatorResult.errors;
			return errorHandler(
				res,
				new _Error(`${e[0].property} ${e[0].message}`, 400, e),
			);
		}
		const { body } = req;
		body.regexes = [];
		body.initialized = true;
		const list = body[body.allowAll];
		body.regexes = list.map((l) => {
			let regex;
			let v = l.value;
			if (l.type !== 'regex') {
				v = v.replace(/[-/\\^$*+?.()|[\]{}]/g, String.raw`\$&`);
				if (l.type === 'ends') regex = `(${v})$`;
				if (l.type === 'starts') regex = `^(${v})`;
				if (l.type === 'contains') regex = `(${v})`;
				if (l.type === 'exact') regex = `^(${v})$`;
			} else if (l.type === 'regex') {
				regex = v.replace(/[\\]/g, String.raw`\$&`);
			}
			return regex;
		});
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const { allowAll } = req.body;
		const projectRecord = await teamsCollection.findOneAndUpdate({
			name: team,
			readers: new ObjectID(req.user_id),
			'projects.name': project,
		}, {
			$set: {
				'projects.$.recording': req.body,
				'projects.$.script.recording': JSON.stringify({
					[allowAll]: body.regexes,
				}),
			},
		}, {
			returnOriginal: false,
			projection: { _id: 0, recording: 1 },
		});
		if (projectRecord.value === null) {
			return errorHandler(
				res,
				new _Error(`Not found: ${team}/${project}`, 404),
			);
		}
		return res.status(200).json('OK');
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
