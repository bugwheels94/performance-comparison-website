import { _Error, errorHandler } from './error';

const jwt = require('jsonwebtoken');

const auth = (handler) => (req, res) => {
	try {
		const d = jwt.verify(req.cookies.rhba, process.env.jwtkey);
		req.user_id = d.a;
	} catch (err) {
		return errorHandler(res, new _Error('Token Invalid', 407, err));
	}
	return handler(req, res);
};

export default auth;
