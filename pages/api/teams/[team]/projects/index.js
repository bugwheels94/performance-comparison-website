import createProject from '@/api/projects/create'
import readProjectsList from '@/api/projects/readList'
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return readProjectsList(req, res);
	case 'POST':
		return createProject(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
