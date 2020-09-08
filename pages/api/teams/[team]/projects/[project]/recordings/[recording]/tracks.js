import getTracks from '@/api/recordings/tracks/readList'
import { _Error, errorHandler } from '@/utils/error';


export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return getTracks(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
