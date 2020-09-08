import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

// REDUCERS
import teams from './store/teams';
import projects from './store/projects';
import recordings from './store/recordings';
import tracks from './store/tracks';
import funnels from './store/funnels';
import members from './store/teamMembers';

export const reducer = combineReducers({ teams, projects, recordings, tracks, funnels, members });

export function initializeStore(initialState = {}) {
	return createStore(
		reducer,
		initialState,
		applyMiddleware(thunkMiddleware),
	);
}
