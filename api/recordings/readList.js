
import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const {
		query: {
			team, project, limit, offset,
		},
	} = req;
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const projectRecord = await teamsCollection.findOne({
			name: team,
			readers: new ObjectID(req.user_id),
			'projects.name': project
		}, {
			projection: { _id: 0, 'projects.$': 1 },
		});
		if (projectRecord === null) {
			return errorHandler(res, new _Error(`Access Denied: ${team}`, 403));
		}
		const $skip = Number.isNaN(offset) ? 0 : Number(offset || 0);
		const $limit = Number.isNaN(limit) ? 0 : Number(limit || 10);
		const $recordingPage = db.collection('recording_page');
		const $recordings = await (await $recordingPage.find({
			projectid: projectRecord.projects[0]._id,
		}, {
			limit: $limit,
			skip: $skip,
			projection: { url: 1, _id: 1 },
		})).toArray();
		const $browsers = db.collection('browser');
		const $recordingIDs = $recordings.map((r) => r._id);
		const $tracks = await (await $browsers.aggregate([{
			$match: {
				'recordings.recording_id': {
					$in: $recordingIDs,
				},
			},
		}, {
			$project: {
				recordings: {
					$filter: {
						input: '$recordings',
						as: 'recording',
						cond: { $in: ['$$recording.recording_id', $recordingIDs] },
					},
				},
			},
		}, { $unwind: '$recordings' }, {
			$group: {
				_id: '$recordings.recording_id',
				count: { $sum: 1 },
			},
		}])).toArray();	
		return res.status(200).json($recordings.map((itm) => ({
			tracks: $tracks.find((item) => item._id.equals(itm._id)) || {},
			...itm
		})));
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
