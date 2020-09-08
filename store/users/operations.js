import fetch from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import types from './types';
import Creators from './actions';

const {
} = Creators;

export default {
	checkAuth: ({ fetchOptions }) => async (dispatch) => fetch({
		url: '/api/auth',
		fetchOptions,
		dispatch,
		actions: asyncAction(types.ME),
	}),
};
