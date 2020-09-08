import getTrack from '@/api/recordings/tracks/read'
import { _Error, errorHandler } from '@/utils/error';


export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return getTrack(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
