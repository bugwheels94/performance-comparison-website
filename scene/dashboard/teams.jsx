import { connect } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import Alert from 'react-bootstrap-plus/Alert';
import Layout from '@/scene/comps/layout';
import { operations as teamOperations } from '@/store/teams';
import FetchComponent from '@/scene/comps/FetchComponent';
import PaginateResource from '@/scene/comps/PaginateResource';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import dontAllow from '@/utils/redirect';
import SideBar from './comps/sidebar';
import CreateTeam from './comps/CreateTeam';

function mapStateToProps(state) {
	return {
		createTeamTracker: state.teams.createTracker,
		getAllTeamsTracker: state.teams.getAllTracker,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		createTeam: (v) => dispatch(teamOperations.create(v)),
		getAllTeams: (v) => dispatch(teamOperations.getAll(v)),
	};
}
function mapDispatchToInitialProps(dispatch) {
	return {
		getAllTeams: (v) => dispatch(teamOperations.getAll(v)),
	};
}
const BreadCrumbData = [
	{ text: 'Dashboard', href: '/dashboard/overview', as: '/dashboard/overview' },
	{ text: 'Teams', active: true },
];

const Home = ({
	createTeam, createTeamTracker, getAllTeamsTracker, getAllTeams,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar active="Teams" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={BreadCrumbData} />
				<h5 className="pb-1">Create New Team</h5>
				<CreateTeam create={createTeam} />
				<FetchComponent tracker={createTeamTracker}>
					{(data) => (
						<Alert variant="success">
							Team Created:
							{' '}
							<Link
								as={`/${data.sent.name}`}
								href="/[team]"
							>
								<a>
									{data.sent.name}
								</a>
							</Link>
						</Alert>
					)}
				</FetchComponent>
				<h5>Teams</h5>
				<PaginateResource tracker={getAllTeamsTracker} getAll={getAllTeams} FilterComponent={() => null}>
					{(data) => (
						<ul className="list-group small">
							{data.received.map((team, i) => (
								<li className="list-group-item rounded-0" key={`${team.name}`}>
									<Link href="/[team]" as={`/${team.name}`}>
										<a className="text-dark">{ team.name }</a>
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

Home.getInitialProps = async ({ res, reduxStore, req }) => {
	const { getAllTeams } = mapDispatchToInitialProps(reduxStore.dispatch);
	try {
		if (await dontAllow({
			req, res, query: getAllTeams, status: 'ifNotLogged',
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
