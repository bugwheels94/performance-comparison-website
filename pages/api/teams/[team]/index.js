import updateTeam from '@/api/teams/update'
import deleteTeam from '@/api/teams/delete'
import headTeam from '@/api/teams/head'
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'DELETE':
		return deleteTeam(req, res);
	case 'PUT':
		return updateTeam(req, res);
	case 'HEAD':
		return headTeam(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
