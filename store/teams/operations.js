import fetch, { querystring } from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import Creators from './actions';
import types from './types';

const {
	setNameWithoutCheck,
} = Creators;

export default {
	create: ({ body }) => async (dispatch) => fetch({
		url: '/api/resource',
		fetchOptions: {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
		extra: { timed: true },
		dispatch,
		actions: asyncAction(types.CREATE),
	}),
	readAll: ({ fetchOptions, params }) => async (dispatch) => fetch({
		url: `/api/resource?${querystring(params)}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.READ_ALL),
	}),
	read: ({ fetchOptions, resourceID }) => async (dispatch) => fetch({
		url: `/api/resource/${resourceID}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.READ),
	}),
	update: ({ resourceID, newName }) => async (dispatch) => fetch({
		url: `/api/resource/${resourceID}`,
		fetchOptions: {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
		dispatch,
		actions: asyncAction(types.UPDATE),
	}),
	delete: (name) => async (dispatch) => fetch({
		url: `/api/resource/${name}`,
		fetchOptions: {
			method: 'delete'
		},
		dispatch,
		actions: asyncAction(types.REMOVE),
	}),
};
