import fetch, { querystring } from '@/utils/fetch';
import { asyncAction } from '@utils/asyncRedux';
import Creators from './actions';
import types from './types';

const {
	setFilter,
} = Creators;


export default {
	setFilter,
	get: ({
		projectName, teamName, fetchOptions, track, 
	}) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/projects/${projectName}/tracks/${track}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET),
	}),
	getAll: ({
		projectName, teamName, fetchOptions, recordingID, params
	}) => async (dispatch) => fetch({
		url: `/api/teams/${teamName}/projects/${projectName}/recordings/${recordingID}/tracks?${querystring(params)}`,
		fetchOptions,
		dispatch,
		actions: asyncAction(types.GET_ALL),
	}),
};
