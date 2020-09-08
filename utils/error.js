export function _Error(message, status, err) {
	const error = err === undefined ? Error.call(this, message) : err;
	this.name = 'CustomError';
	this.res = message;
	this.stack = error.stack;
	this.status = status;
}

_Error.prototype = Object.create(Error.prototype);
_Error.prototype.constructor = _Error;

export function errorHandler(res, e) {
	console.log(e.stack);
	return res.status(e.status).send(e.res);
}
