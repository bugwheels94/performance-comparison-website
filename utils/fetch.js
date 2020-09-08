import fetch from 'isomorphic-unfetch';

export default async ({
	url, fetchOptions, dispatch, actions, extra,
}) => {
	let apiHost = '';
	let timed;
	let metaData;
	let parallelRequestID;
	if (extra) {
		if (extra.timed) {
			timed = extra.timed;
		}
		if (extra.parallelRequestID) {
			parallelRequestID = extra.parallelRequestID
		}
		if (extra.data) {
			metaData = extra.data;
		}
	}
	if (typeof window === 'undefined') {
		apiHost = 'http://127.0.0.1:3000';
	}
	if (dispatch) dispatch(actions.PENDING({ parallelRequestID }));
	if (fetchOptions.body) {

	}
	const res = await fetch(`${apiHost}${url}`, {
		...fetchOptions,
		credentials: 'same-origin'
	});
	if (res.ok) {
		const data = {
			finished: true,
			sent: (fetchOptions && fetchOptions.body ? JSON.parse(fetchOptions.body) : {}),
			metaData,
		};
		try {
			const records = await res.json();
			data.received = records;
		} catch (e) {}
		if (dispatch) {
			dispatch(actions.SUCCESS({ value: data, parallelRequestID }));
			if (timed) setTimeout(() => dispatch(actions.RESET({ parallelRequestID })), 5000);
		}
		return data;
	}
	const error = await res.text();
	if (dispatch) {
		dispatch(actions.FAILURE({ value: error, parallelRequestID }));
		if (timed) setTimeout(() => dispatch(actions.RESET({ parallelRequestID })), 5000);
	}
	throw error;
};
export const querystring = (params) => Object.keys(params || {})
	.map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
	.join('&');
