import { connect } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import Layout from '@scene/comps/layout';
import SideBar from '@/scene/comps/dashboardSidebar';
import { operations as projectOperations } from '@/store/projects';
import dontAllow from '@/utils/redirect';
import PaginateResource from '@/scene/comps/PaginateResource';

function mapStateToProps(state) {
	return { getAllProjectsTracker: state.projects.getAllTracker };
}
function mapDispatchToInitialProps(dispatch) {
	return {
		getAllProjects: (v) => dispatch(projectOperations.getAll(v)),
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getAllProjects: (v) => dispatch(projectOperations.getAll(v)),
	};
}

const Home = ({ getAllProjectsTracker, getAllProjects }) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar active="Your Projects" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<h5>Projects</h5>
				<PaginateResource tracker={getAllProjectsTracker} getAll={getAllProjects} FilterComponent={() => null}>
					{(data) => (
						<ul className="list-group small">
							{data.received.map((team) => (
								<li className="list-group-item rounded-0" key={`${team.name}-${team.projects.name}`}>
									<Link href="/[team]/[project]" as={`/${team.name}/${team.projects.name}`}>
										<a className="text-dark d-block">{ team.projects.name }</a>
									</Link>
									<Link href="/[team]" as={`/${team.name}`}>
										<a className="small text-dark">
											<b>Team: </b>
											{ team.name }
										</a>
									</Link>
								</li>
							))}
						</ul>
					)}
				</PaginateResource>
			</div>
		</div>
	</Layout>
);
Home.getInitialProps = async ({
	res, reduxStore, req,
}) => {
	const { getAllProjects } = mapDispatchToInitialProps(reduxStore.dispatch);
	try {
		if (await dontAllow({
			req, res, query: getAllProjects, status: 'ifNotLogged',
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
