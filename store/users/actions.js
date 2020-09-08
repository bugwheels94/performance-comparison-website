import types from './types.js';


export default {
	setUsersFilter: (value) => ({
		type: types.SET_USERS_FILTER,
		value,
	}),
};
