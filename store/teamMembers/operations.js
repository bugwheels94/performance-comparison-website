import fetch, { querystring } from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import Creators from './actions';
import types from './types';

const {
} = Creators;

export default {
	getAll: ({ teamName, fetchOptions, params }) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/members?${querystring(params)}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_ALL),
	}),
	create: ({ details, teamName }) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/members`,
		fetchOptions: {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: details.email,
				role: details.role,
			}),
		},
		extra: { timed: true},
		dispatch,
		actions: asyncAction(types.CREATE),
	}),
	update: ({ memberID, role, teamName }) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/members/${memberID}`,
		fetchOptions: {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				role,
			}),
		},
		extra: { parallelRequestID: memberID, timed: true },
		dispatch,
		actions: asyncAction(types.UPDATE),
	}),
	remove: ({ memberID, teamName }) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/members/${memberID}`,
		fetchOptions: {
			method: 'delete',
		},
		extra: { data: memberID, parallelRequestID: memberID, timed: true },
		dispatch,
		actions: asyncAction(types.REMOVE),
	}),
};
