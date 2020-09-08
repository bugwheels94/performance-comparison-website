import { asyncReducer } from '@utils/asyncRedux';
import types from './types';
// REDUCERS
const INIT_STATE = {
	name: '',
};

const reducer = (s = INIT_STATE, action) => {
	let state = s;
	state = asyncReducer(types.CREATE, state, action)
	state = asyncReducer(types.SET_NAME, state, action)
	state = asyncReducer(types.GET_ALL, state, action)
	state = asyncReducer(types.GET_BY_TEAM, state, action);
	switch (action.type) {
	case types.SET_NAME: {
		const { value } = action;
		return {
			...state,
			name: value.metaData,
		};
	}
	default: return state;
	}
};
export default reducer;