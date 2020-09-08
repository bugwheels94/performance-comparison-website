const names = (type) => ({
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}`,
	FAILURE: `${type}_FAILURE`,
	RESET: `${type}_RESET`,
});
export const asyncAction = (type) => {
	const types = names(type);
	return {
		PENDING: ({ parallelRequestID }) => ({
			type: types.PENDING,
			parallelRequestID,
		}),
		SUCCESS: ({ value, parallelRequestID }) => ({
			type: types.SUCCESS,
			value,
			parallelRequestID,
		}),
		FAILURE: ({ value, parallelRequestID }) => ({
			type: types.FAILURE,
			value,
			parallelRequestID,
		}),
		RESET: ({ parallelRequestID }) => ({
			type: types.RESET,
			parallelRequestID,
		}),
	};
};
const snakeToCamel = (str) => str.toLowerCase().replace(/.+__/, '').replace(/([-_][a-z])/g, (group) => group
	.toUpperCase()
	.replace('-', '')
	.replace('_', ''));
export const asyncReducer = (name, state, { type, value, parallelRequestID }) => {
	const types = names(name);
	const KEY = `${snakeToCamel(name)}Tracker`;
	let rootNode = {};
	let key = KEY;
	rootNode[KEY] = state[KEY] || {};
	let node = rootNode
	if (parallelRequestID) {
		node = node[KEY];
		node[parallelRequestID] = node[parallelRequestID] || {};
		key = parallelRequestID;
	}
	switch (type) {
	case types.PENDING:
		node[key] = {
			pending: true,
		};
		break;
	case types.SUCCESS:
		node[key] = value;
		break;
	case types.FAILURE:
		node[key] = {
			error: value,
		};
		break;
	case types.RESET:
		node[key] = {};
		break;
	default:
		return state[KEY] == null ? { ...state, ...rootNode } : state
	}
	return {
		...state,
		...rootNode,
	};
};
const names2 = (type) => ['CREATE', 'GET', 'GET_ALL', 'UPDATE', 'REMOVE'].reduce((acc, action) => {
	acc[action] = {
		PENDING: `${type}__${action}_PENDING`,
		SUCCESS: `${type}__${action}`,
		FAILURE: `${type}__${action}_FAILURE`,
		RESET: `${type}__${action}_RESET`,
	};
	return acc;
}, {});

export const asyncCRUDReducer = (name, state, { type, value, parallelRequestID }) => {
	const types = names2(name);
	const actions = ['CREATE', 'GET', 'GET_ALL', 'UPDATE', 'DELETE'];
	let rootNode;
	let allNodes = {};
	let initialiseState = false;
	for (var i = 0; i < actions.length; i++) {
		const KEY = `${snakeToCamel(actions[i])}Tracker`;
		rootNode = {};
		rootNode[KEY] = { ...(state[KEY] || {}) }
		if (state[KEY] == null) {
			allNodes[KEY] = {};
			initialiseState = true;
		}
		
		let node = rootNode
		let key = KEY;
		if (parallelRequestID) {
			node = node[KEY];
			node[parallelRequestID] = node[parallelRequestID] || {};
			key = parallelRequestID;
		}
		if (type === types[actions[i]].PENDING) {
			node[key] = {
				pending: true,
			};
			break;
		} else if (type === types[actions[i]].FAILURE) {
			node[key] = {
				error: value,
			};
			break;
		} else if (type === types[actions[i]].RESET) {
			node[key] = {};
			break;
		} else if (type === types[actions[i]].SUCCESS) {
			if (actions[i] === 'CREATE') {
				if (state.getAllTracker.received) {
					state.getAllTracker.received.unshift({
						...value.received,
						...value.sent,
					});
				}
			}
			node[key] = value;
			break;
		}
	}
	if (i === actions.length) {	// no matches
		return initialiseState ? { ...state, ...allNodes } : state
	}
	return {
		...state,
		...rootNode 
	}
};
