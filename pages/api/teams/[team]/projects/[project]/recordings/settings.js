import readSettings from '@/api/recordings/settings/read';
import putSettings from '@/api/recordings/settings/put';

import { _Error, errorHandler } from '@/utils/error';



export default (req, res) => {
	switch (req.method) {
	case 'PUT':
		return putSettings(req, res);
	case 'GET':
		return readSettings(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
