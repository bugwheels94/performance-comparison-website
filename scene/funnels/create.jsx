import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Layout from '@/scene/comps/layout';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamsOperations } from '@/store/teams';
import { operations as funnelsOperations } from '@/store/funnels';
import Create from './comps/create';
import SideBar from '../projects/comps/sidebar';

const mapDispatchToProps = (dispatch) => ({
	postFunnel: (opts) => dispatch(funnelsOperations.postFunnel(opts)),
});
const mapDispatchToInitialProps = (dispatch) => ({
	setProjectName: (project) => dispatch(projectsOperations.setName(project)),
	setTeamName: (team) => dispatch(teamsOperations.setNameWithoutCheck(team)),
});
const mapStateToProps = (state) => ({
	project: state.projects,
	team: state.teams,
	POST_FUNNEL: state.funnels.POST_FUNNEL,
});

const Home = ({
	project,
	team,
	POST_FUNNEL,
	postFunnel,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar project={project.name} team={team.name} active="Conversion Funnels" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<h4 className="pb-1">
					Create Funnel
				</h4>
				<Create
					POST_FUNNEL={POST_FUNNEL}
					postFunnel={(v) => postFunnel({
						project: project.name,
						team: team.name,
						funnel: v,
					})}
				/>
			</div>
		</div>
	</Layout>
);

Home.getInitialProps = async ({
	res, reduxStore, req, query,
}) => {
	const {
		setProjectName, setTeamName,
	} = mapDispatchToInitialProps(reduxStore.dispatch);
	const isServer = typeof window === 'undefined';
	const {
		project, team,
	} = query;
	const redirectOnError = () => (isServer
		? (res.writeHead(302, { Location: '/login' }), res.end())
		: Router.push('/login'));
	try {
		setTeamName(team);
		return setProjectName({
			project,
			team,
			opts: {
				...(isServer ? {
					headers: {
						cookie: req.headers.cookie,
					},
				} : {}),
				method: 'head',
			},
		});
	} catch (error) {
		// Implementation or Network error
		return redirectOnError();
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
