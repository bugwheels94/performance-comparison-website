import fetch from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import Creators from './actions';
import types from './types';

const {
	setFilter, setID,
} = Creators;


export default {
	setID,
	setFilter,
	getAll: ({
		project, team, filter, fetchOptions, 
	}) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects/${project}/funnels/?limit=${filter.limit}&offset=${filter.offset}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_ALL),
	}),
	create: ({
		project, team, funnel,
	}) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects/${project}/funnels/`,
		fetchOptions: {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(funnel.path),
		},
		dispatch,
		actions: asyncAction(types.CREATE),
	}),
};
