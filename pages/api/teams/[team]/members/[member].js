import patchAccess from '@/api/teamMembers/patchAccess'
import deleteMember from '@/api/teamMembers/delete'
import { _Error, errorHandler } from '@/utils/error';

export default async (req, res) => {
	switch (req.method) {
	case 'DELETE':
		return deleteMember(req, res);
	case 'PUT':
		return patchAccess(req, res);
	default:
		return errorHandler(res, new _Error('Unknown Method', 400));
	}
};
