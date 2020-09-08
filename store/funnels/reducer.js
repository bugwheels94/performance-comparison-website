import { asyncReducer } from '@utils/asyncRedux';
import types from './types';
// REDUCERS
const INIT_STATE = {
	filter: { limit: 10, offset: 0 },
};

export default (s = INIT_STATE, action) => {
	let state = s;
	state = asyncReducer(types.GET_ALL, state, action);
	state = asyncReducer(types.CREATE, state, action);
	switch (action.type) {
	case types.SET_ID: {
		return {
			...state,
			funnelID: action.value,
		};
	}
	case types.SET_FILTER: {
		return {
			...state,
			filter: action.value,
		};
	}
	default: return state;
	}
};
