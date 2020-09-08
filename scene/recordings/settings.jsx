import React from 'react';
import { connect } from 'react-redux';
import dontAllow from '@/utils/redirect';
import Layout from '@/scene/comps/layout';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamsOperations } from '@/store/teams';
import { operations as recordingsOperations } from '@/store/recordings';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import FetchComponent from '@/scene/comps/FetchComponent';
import SideBar from '../projects/comps/sidebar';
import Edit from './comps/edit';

const mapDispatchToProps = (dispatch) => ({
	updateSettings: (details) => dispatch(recordingsOperations.updateSettings(details)),
});

const mapDispatchToInitialProps = (dispatch) => ({
	setProjectNameWithoutCheck: (project) => dispatch(projectsOperations.setNameWithoutCheck(project)),
	setTeamNameWithoutCheck: (team) => dispatch(teamsOperations.setNameWithoutCheck(team)),
	loadSettings: (opts) => dispatch(recordingsOperations.getSettings(opts)),
});

const mapStateToProps = (state) => ({
	projectName: state.projects.name,
	teamName: state.teams.name,
	getSettingsTracker: state.recordings.getSettingsTracker,
	updateSettingsTracker: state.recordings.updateSettingsTracker,
});

const Home = ({
	updateSettingsTracker,
	updateSettings,
	getSettingsTracker,
	projectName,
	teamName,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar project={projectName} team={teamName} active="Session Recordings" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={[
					{ text: teamName, href: '/[team]', as: `/${teamName}` },
					{ text: projectName, href: '/[team]/[project]', as: `/${teamName}/${projectName}` },
					{ text: 'Recordings Settings', active: true },
				]}
				/>
				<h4 className="pb-1">
					Settings
				</h4>
				<FetchComponent tracker={getSettingsTracker}>
					{(data) => (
						<Edit
							tracker={updateSettingsTracker}
							settings={data.received}
							update={(v) => updateSettings({
								project: projectName,
								team: teamName,
								settings: v,
							})}
						/>
					)}
				</FetchComponent>

			</div>
		</div>
	</Layout>
);
Home.getInitialProps = async ({
	res, reduxStore, req, query,
}) => {
	const {
		setProjectNameWithoutCheck, setTeamNameWithoutCheck, loadSettings,
	} = mapDispatchToInitialProps(reduxStore.dispatch);
	const { project, team } = query;
	setProjectNameWithoutCheck(project);
	setTeamNameWithoutCheck(team);
	try {
		if (await dontAllow({
			req, res, query: loadSettings, status: 'ifNotLogged', queryArguments: { team, project },
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
