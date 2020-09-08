import types from './types';

export default {
	setFilter: (value) => ({
		type: types.SET_FILTER,
		value,
	}),
	setID: (value) => ({
		type: types.SET_ID,
		value,
	}),
};
