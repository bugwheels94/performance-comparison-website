import getRecordings from '@/api/recordings/readList';
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return getRecordings(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};