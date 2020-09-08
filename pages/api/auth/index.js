import current from '@/api/auth/current';

import { _Error, errorHandler } from '@/utils/error';
export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return current(req, res);	
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
