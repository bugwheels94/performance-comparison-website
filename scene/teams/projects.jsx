import { connect } from 'react-redux';
import React from 'react';
import Link from 'next/link';
import Layout from '@scene/comps/layout';
import { operations as teamOperations } from '@/store/teams';
import { operations as projectOperations } from '@/store/projects';
import PaginateResource from '@/scene/comps/PaginateResource';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import dontAllow from '@/utils/redirect';
import SideBar from './comps/sidebar';

function mapStateToProps(state) {
	return {
		teamName: state.teams.name,
		getProjectsByTeamTracker: state.projects.getByTeamTracker,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getProjectsByTeam: (name) => dispatch(projectOperations.getByTeam(name)),
	};
}
function mapDispatchToInitialProps(dispatch) {
	return {
		setTeamName: (name) => dispatch(teamOperations.setName(name)),
		getProjectsByTeam: (name) => dispatch(projectOperations.getByTeam(name)),
	};
}

const Home = ({ teamName, getProjectsByTeamTracker, getProjectsByTeam }) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar team={teamName} active="Projects" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={[
					{ text: teamName, href: '/[team]', as: `/${teamName}` },
					{ text: 'Projects', active: true },
				]}
				/>
				<h4 className="pb-1">Projects</h4>

				<PaginateResource tracker={getProjectsByTeamTracker} getAllArguments={{ team: teamName }} getAll={getProjectsByTeam} FilterComponent={() => null}>
					{(data) => (
						<ul className="list-group small">
							{data.received.map((team) => (
								<li className="list-group-item rounded-0" key={`${team.name}-${team.projects.name}`}>
									<Link href="/[team]/[project]" as={`/${team.name}/${team.projects.name}`}>
										<a className="text-dark d-block">{ team.projects.name }</a>
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
	res, reduxStore, req, query,
}) => {
	const { team } = query;
	const { getProjectsByTeam, setTeamName } = mapDispatchToInitialProps(reduxStore.dispatch);
	try {
		if (await dontAllow({
			req, res, query: setTeamName, status: 'ifNotLogged', queryArguments: { team, fetchOptions: { method: 'head' } }, 
		}) !== false) return {};
		await (getProjectsByTeam({
			team,
			fetchOptions: typeof window === 'undefined' ? {
				headers: {
					cookie: req.headers.cookie,
				},
			} : {},
		}));
		return {};
	} catch (e) {
		return {};
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
