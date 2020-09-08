import { connect } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import Alert from 'react-bootstrap-plus/Alert';
import Layout from '@/scene/comps/layout';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamOperations } from '@/store/teams';
import dontAllow from '@/utils/redirect';
import FetchComponent from '@/scene/comps/FetchComponent';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import CreateProject from './comps/CreateProject';
import SideBar from './comps/sidebar';

function mapStateToProps(state) {
	return {
		teamName: state.teams.name,
		createProjectTracker: state.projects.createTracker,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		createProject: (v) => dispatch(projectsOperations.create(v)),
	};
}
function mapDispatchToInitialProps(dispatch) {
	return {
		setTeamName: (name) => dispatch(teamOperations.setName(name)),
	};
}
function Home({ createProject, createProjectTracker, teamName }) {
	return (
		<Layout title="Home | Redhive Behavioral analytics">
			<div className="row h-100">
				<SideBar active="New Project" className="col-md-3 col-xl-2 col-1 sidebar" team={teamName} />
				<div className="col-md-9 col-xl-10 col-11 pt-3">
					<BreadCrumb list={[
						{ text: teamName, href: '/[team]', as: `/${teamName}` },
						{ text: 'New Project', active: true },
					]} />
					<h4 className="pb-1">Create New Project</h4>
					<CreateProject
						className="mb-3"
						teamName={teamName}
						createProject={(v) => createProject(v)}
					/>
					<FetchComponent tracker={createProjectTracker}>
						{(data) => (
							<Alert variant="success">
								Project Created:
								{' '}
								<Link
									as={`/${data.metaData}/${data.sent.name}`}
									href="/[team]/[project]"
								>
									<a>
										{data.sent.name}
									</a>
								</Link>
							</Alert>
						)}
					</FetchComponent>

				</div>
			</div>
		</Layout>
	);
}
Home.getInitialProps = async ({ res, reduxStore, req, query }) => {
	const { team } = query;
	const { setTeamName } = mapDispatchToInitialProps(reduxStore.dispatch);
	try {
		if (await dontAllow({
			req, res, query: setTeamName, status: 'ifNotLogged', queryArguments: { team, fetchOptions: { method: 'head' } }, 
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
