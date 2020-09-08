import fetch, { querystring } from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import Creators from './actions';
import types from './types';

const { setNameWithoutCheck } = Creators;


export default {
	setNameWithoutCheck,
	setName: ({ fetchOptions, project, team }) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects/${project}`,
		fetchOptions,
		dispatch,
		extra: { data: project },
		actions: asyncAction(types.SET_NAME),
	}),
	create: ({ name, teamName, description }) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/projects`,
		fetchOptions: {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				description,
			}),
		},
		extra: { data: teamName, timed: true },
		dispatch,
		actions: asyncAction(types.CREATE),
	}),
	getAll: ({ fetchOptions, params }) => async (dispatch) => fetch({
		url: `/api/users/projects?${querystring(params)}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_ALL),
	}),
	getByTeam: ({ team, fetchOptions, params }) => async (dispatch) => fetch({
		url: `/api/teams/${team}/projects?${querystring(params)}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_BY_TEAM),
	}),
};
