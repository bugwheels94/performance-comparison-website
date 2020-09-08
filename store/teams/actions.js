import types from './types.js';


export default {
	setNameWithoutCheck: (metaData) => ({
		type: types.SET_NAME,
		value: { metaData },
	}),
};
