import { asyncReducer, asyncCRUDReducer } from '@/utils/asyncRedux';
import types from './types';

const INITIAL_STATE = {
	name: '',
	listByWriteAccess: [],
	list: [],
	
};
const reducer = (s = INITIAL_STATE, action) => {
	let state = s;
	state = asyncCRUDReducer('TEAM', state, action);
	// state = asyncReducer(types.CREATE, state, action);
	// state = asyncReducer(types.UPDATE, state, action);
	// state = asyncReducer(types.REMOVE, state, action);
	// state = asyncReducer(types.GET_ALL, state, action);
	switch (action.type) {
	// case types.CREATE: {
	// 	const { value } = action;
	// 	return {
	// 		...state,
	// 		listByWriteAccess: [value.received, ...state.listByWriteAccess],
	// 		list: [value.received, ...state.list],
	// 	};
	// }
	case types.GET_WRITABLE: {
		const { value } = action;
		return {
			...state,
			listByWriteAccess: value.received,
		};
	}
	case types.RENAME: {
		const { value } = action;
		return {
			...state,
			name: value.sent.newName,
		};
	}
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
