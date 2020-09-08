import readMembers from '@/api/teamMembers/readList'
import createMember from '@/api/teamMembers/create'
import { _Error, errorHandler } from '@/utils/error';


export default (req, res) => {
	switch (req.method) {
	case 'GET':
		return readMembers(req, res);
	case 'POST':
		return createMember(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
