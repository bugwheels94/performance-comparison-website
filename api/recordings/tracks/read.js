import { ObjectID } from 'mongodb';
import auth from '@/utils/auth';
import { _Error, errorHandler } from '@/utils/error';
import DB from '@/utils/db';

export default auth(async (req, res) => {
	const {
		query: {
			track,
		},
	} = req;
	try {
		const db = await DB();
		const $tracks = db.collection('recording_track');
		const $track = await $tracks.findOne({
			_id: new ObjectID(track),
		});
		if ($track === null) {
			return errorHandler(res, new _Error('Not Found', 404));
		}
		return res.send($track.data);
	} catch (e) {
		return errorHandler(res, new _Error('Some Error', 500, e));
	}
});
