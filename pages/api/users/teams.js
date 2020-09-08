import readTeams from '@/api/teams/readList';
import { _Error, errorHandler } from '@/utils/error';

export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return readTeams(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
