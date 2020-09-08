import { ObjectID } from 'mongodb';
import DB from '@/utils/db';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import validate from './validations';

async function createProject(req, res) {
	const { team } = req.query;
	const validationResult = validate(req.body);
	if (validationResult) {
		return errorHandler(res, new _Error(validationResult, 400));
	}
	const { name, description } = req.body;
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const newProjectID = new ObjectID();

		const teamRecord = await teamsCollection.findOne({
			name: team,
			'projects.name': name
		}, {
			projection: { _id: 1 },
		});
		if (teamRecord !== null) {
			return errorHandler(res, new _Error('Project Already Exists', 409));
		}
		const projectRecord = await teamsCollection.updateOne({ name: team,
			writers: new ObjectID(req.user_id) 
		}, {
			$push: {
				projects: {
					_id: newProjectID,
					name,
					description,
					funnels: [],
					recording: {
						initialized: false,
						allow_all: true,
						blacklist: [],
						whitelist: [],
					},
					heatmap: {
						initialized: false,
						allow_all: true,
						blacklist: [],
						whitelist: [],
					},
					script: {
						recording: '{}',
						heatmap: '{}',
					},
				},
			},
		});
		if (projectRecord.result.ok !== 1) {
			return errorHandler(res, new _Error('Some Error', 500));
		}
		if (projectRecord.result.n === 0) {
			return errorHandler(res, new _Error('Not Found', 404));
		}
		return res.status(200).json({ _id: newProjectID });
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
}
export default auth(createProject);
