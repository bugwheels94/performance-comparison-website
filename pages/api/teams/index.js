import createTeam from '@/api/teams/create';
import { _Error, errorHandler } from '@/utils/error';
export default (req, res) => {
	switch (req.method) {
	case 'POST':
		return createTeam(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
