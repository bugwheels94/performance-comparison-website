import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '@/scene/comps/layout';
import Spinner from 'react-bootstrap-plus/Spinner';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamsOperations } from '@/store/teams';
import { operations as funnelsOperations } from '@/store/funnels';
import Funnels from './comps/funnels';
import SideBar from '../projects/comps/sidebar';

const mapDispatchToProps = (dispatch) => ({
	loadFunnels: (opts) => dispatch(funnelsOperations.loadFunnels(opts)),
});

const mapDispatchToInitialProps = (dispatch) => ({
	setProjectName: (project) => dispatch(projectsOperations.setNameWithoutCheck(project)),
	setTeamName: (team) => dispatch(teamsOperations.setNameWithoutCheck(team)),
	loadFunnels: (opts) => dispatch(funnelsOperations.loadFunnels(opts)),
});

const mapStateToProps = (state) => ({
	project: state.projects,
	funnels: state.funnels.LOAD_FUNNELS,
	team: state.teams,
	filter: state.funnels.filter,
});


const Home = ({
	project,
	team,
	funnels,
	filter,
	loadFunnels,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar project={project.name} team={team.name} active="Conversion Funnels" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<h4 className="pb-1 d-flex justify-content-between">
					Funnels
					<Link as={`/${team.name}/${project.name}/funnels/new`} href={`/[team]/[project]/funnels/new`}><a className="btn btn-primary">Create Funnel</a></Link>
				</h4>
				{ funnels.pending ? <Spinner animation="border" /> :
					funnels.error ? <Alert variant="danger">{funnels.error}</Alert> :
						(
							<Funnels
								funnels={funnels}
								team={team}
								project={project}
								filter={filter}
								loadFunnels={loadFunnels}
							/>
						)}
			</div>
		</div>
	</Layout>
);

Home.getInitialProps = async ({
	res, reduxStore, req, query,
}) => {
	const {
		setProjectName, setTeamName, loadFunnels,
	} = mapDispatchToInitialProps(reduxStore.dispatch);
	const isServer = typeof window === 'undefined';
	const {
		project, team, offset = 0, limit = 10,
	} = query;
	const redirectOnError = () => (isServer
		? (res.writeHead(302, { Location: '/login' }), res.end())
		: Router.push('/login'));

	try {
		setProjectName(project);
		setTeamName(team);
		return loadFunnels({
			project,
			team,
			filter: {
				limit,
				offset,
			},
			opts: isServer ? {
				headers: {
					cookie: req.headers.cookie,
				},
			} : {},
		});
	} catch (error) {
		// Implementation or Network error
		return redirectOnError();
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
