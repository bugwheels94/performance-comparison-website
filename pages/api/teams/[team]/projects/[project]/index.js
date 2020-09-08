import readProject from '@/api/projects/read'
import headProject from '@/api/projects/head'
import deleteProject from '@/api/projects/delete'
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return readProject(req, res);
	case 'HEAD':
		return headProject(req, res);
	case 'DELETE':
		return deleteProject(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
