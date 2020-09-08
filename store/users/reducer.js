import { asyncReducer } from '@/utils/asyncRedux';
import types from './types';

const INITIAL_STATE = {	

};
const reducer = (s = INITIAL_STATE, action) => {
	let state = s;
	state = asyncReducer(types.ME, state, action);
	return state
};

export default reducer;
