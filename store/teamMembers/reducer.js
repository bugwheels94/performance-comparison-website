import { asyncReducer, asyncCRUDReducer } from '@/utils/asyncRedux';
import types from './types';

const INITIAL_STATE = {
};
const reducer = (s = INITIAL_STATE, action) => {
	let state = s;
	state = asyncCRUDReducer('MEMBER', state, action);
	switch (action.type) {
	default: return state;
	}
};

export default reducer;
