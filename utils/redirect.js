import Router from 'next/router';

export const redirect = (res, url) => (typeof window !== 'undefined'
	? Router.push(url)
	: (res.writeHead(302, { Location: url }), res.end()));

export default async ({
	req, res, query, status, queryArguments={}
}) => {
	try {
		await query({
			...queryArguments,
			fetchOptions: typeof window === 'undefined' ? {
				headers: {
					cookie: req.headers.cookie,
				},
				...(queryArguments.fetchOptions || {})
			} : (queryArguments.fetchOptions || {}),
		});
		if (status === 'ifLogged') {
			return redirect(res, '/');
		}
		return false;
	} catch (error) {
		if (status === 'ifNotLogged') {
			return redirect(res, '/');
		}
		return false;
	}
};
