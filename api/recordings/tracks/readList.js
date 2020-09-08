import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';
import JSONStream from 'JSONStream';

export default auth(async (req, res) => {
	const {
		query: {
			team, project, limit, offset, recording,
		},
	} = req;
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const projectRecord = await teamsCollection.findOne({
			name: team,
			readers: new ObjectID(req.user_id),
			'projects.name': project,
		}, {
			projection: { _id: 0, 'projects.$._id': 1 },
		});
		if (projectRecord === null) {
			return errorHandler(res, new _Error('Not Found', 404));
		}
		const $pages = db.collection('recording_page');
		const $page = await $pages.findOne({
			projectid: projectRecord.projects[0]._id,
			_id: new ObjectID(recording),
		});
		if ($page === null) {
			return errorHandler(
				res,
				new _Error('Recording Not found', 404),
			);
		}
		const $skip = Number.isNaN(offset) ? 0 : Number(offset || 0);
		const $limit = Number.isNaN(limit) ? 0 : Number(limit || 10);
		const $tracks = db.collection('browser');
		const $track = await $tracks.aggregate([{
			$match: {
				'recordings.recording_id': $page._id,
			},
		}, {
			$project: {
				_id: 0,
				recordings: {
					$filter: {
						input: '$recordings',
						as: 'recording',
						cond: { $eq: ['$$recording.recording_id', new ObjectID(recording)] },
					},
				},
			},
		},
		{ $unwind: '$recordings' },
		{ $skip },
		{ $limit },
		{
			$project: {
				_id: '$recordings.track_id',
			},
		},
		]);
		return $track.stream().pipe(JSONStream.stringify()).pipe(res);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
