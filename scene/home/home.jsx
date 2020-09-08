import { connect } from 'react-redux';
import React from 'react';
import { operations as userOperations } from '@/store/users';
import dontAllow, { redirect } from '@/utils/redirect';

function mapStateToProps(state) {
	return {
	};
}
function mapDispatchToProps(dispatch) {
	return {};
}
function mapDispatchToInitialProps(dispatch) {
	return {
		checkAuth: (v) => dispatch(userOperations.checkAuth(v)),
	};
}

const Home = ({
}) => <>Hi</>;


Home.getInitialProps = async ({
	res, reduxStore, req,
}) => {
	const { checkAuth } = mapDispatchToInitialProps(reduxStore.dispatch);
	try {
		if (await dontAllow({
			req, res, query: checkAuth, status: 'ifNotLogged',
		}) !== false) return {};
		return await redirect(res, '/dashboard/overview');
	} catch (e) {
		return {};
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
