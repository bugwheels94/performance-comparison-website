import readFunnels from '@/api/funnels/readList';
import createFunnel from '@/api/funnels/create';
import deleteFunnel from '@/api/funnels/delete';
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return readFunnels(req, res);
	case 'POST':
		return createFunnel(req, res);
	case 'DELETE':
		return deleteFunnel(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
