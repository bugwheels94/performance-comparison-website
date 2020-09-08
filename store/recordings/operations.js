import fetch, { querystring } from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import Creators from './actions';
import types from './types';

const {
	setFilter, setID,
} = Creators;


export default {
	setID,
	getSettings: ({ team, project, fetchOptions }) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects/${project}/recordings/settings`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_SETTINGS),
	}),
	setFilter,
	updateSettings: ({
		project, team, settings,
	}) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects/${project}/recordings/settings/`,
		fetchOptions: {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(settings),
		},
		dispatch,
		actions: asyncAction(types.UPDATE_SETTINGS),
	}),
	getAll: ({
		project, team, params, fetchOptions, 
	}) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects/${project}/recordings/?${querystring(params)}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_ALL),
	})
};
