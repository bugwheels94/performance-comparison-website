import deleteFunnel from '@/api/funnels/delete';
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'DELETE':
		return deleteFunnel(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
