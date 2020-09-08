import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dontAllow from '@/utils/redirect';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/scene/comps/layout';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamsOperations } from '@/store/teams';
import { operations as recordingsOperations } from '@/store/recordings';
import FetchComponent from '@/scene/comps/FetchComponent';
import PaginateResource from '@/scene/comps/PaginateResource';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import SideBar from '../projects/comps/sidebar';
import Edit from './comps/edit';

const mapDispatchToProps = (dispatch) => ({
	getRecordings: (opts) => dispatch(recordingsOperations.getAll(opts)),
	updateSettings: (details) => dispatch(recordingsOperations.updateSettings(details)),
});

const mapDispatchToInitialProps = (dispatch) => ({
	setProjectNameWithoutCheck: (project) => dispatch(projectsOperations.setNameWithoutCheck(project)),
	setTeamNameWithoutCheck: (team) => dispatch(teamsOperations.setNameWithoutCheck(team)),
	loadSettings: (opts) => dispatch(recordingsOperations.getSettings(opts)),
	getRecordings: (opts) => dispatch(recordingsOperations.getAll(opts)),
});

const mapStateToProps = (state) => ({
	projectName: state.projects.name,
	teamName: state.teams.name,
	getRecordingsTracker: state.recordings.getAllTracker,
	getSettingsTracker: state.recordings.getSettingsTracker,
	updateSettingsTracker: state.recordings.updateSettingsTracker,
});

const Home = ({
	updateSettingsTracker,
	updateSettings,
	getSettingsTracker,
	projectName,
	teamName,
	getRecordings,
	getRecordingsTracker,
}) => {
	const isInit = getSettingsTracker.finished && getSettingsTracker.received.initialized;
	return (
		<Layout title="Home | Redhive Behavioral analytics">
			<div className="row h-100">
				<SideBar project={projectName} team={teamName} active="Session Recordings" className="col-md-3 col-xl-2 col-1 sidebar" />
				<div className="col-md-9 col-xl-10 col-11 pt-3">
					<BreadCrumb list={[
						{ text: teamName, href: '/[team]', as: `/${teamName}` },
						{ text: projectName, href: '/[team]/[project]', as: `/${teamName}/${projectName}`},
						{ text: 'Recordings', active: true }
					]}
					/>
					<h4 className="pb-1">
						Recordings
						{ isInit && (
							<Link
								as={`/${teamName}/${projectName}/recordings/settings`}
								href="/[team]/[project]/recordings/settings"
							>
								<a>
									<FontAwesomeIcon className="ml-2" icon={faCog} />
								</a>
							</Link>
						)}
					</h4>
					<FetchComponent tracker={getSettingsTracker}>
						{(data) => (
							!isInit && (
								<Edit
									tracker={updateSettingsTracker}
									settings={data.received}
									update={(v) => updateSettings({
										project: projectName,
										team: teamName,
										settings: v,
									})}
								/>
							))}
					</FetchComponent>
					{ isInit && (
						<PaginateResource
							tracker={getRecordingsTracker}
							getAll={getRecordings}
							FilterComponent={() => null}
							getAllArguments={{project: projectName, team: teamName}}
						>
							{(data, searchOptions) => (
								<ul className="list-group small">
									{data.received.map((recording) => (
										<li className="list-group-item rounded-0" key={recording._id}>
											<Link
												as={`/${teamName}/${projectName}/recordings/${recording._id}/tracks`}
												href="/[team]/[project]/recordings/[recordingID]/tracks"
											>
												<a>{recording.url}</a>
											</Link>
											-{recording.tracks.count} Recordings
										</li>

									))}
								</ul>
							)}
						</PaginateResource>
					)}

				</div>
			</div>
		</Layout>
	);
};
Home.getInitialProps = async ({
	res, reduxStore, req, query,
}) => {
	const {
		setProjectNameWithoutCheck, setTeamNameWithoutCheck, loadSettings, getRecordings,
	} = mapDispatchToInitialProps(reduxStore.dispatch);
	const { project, team } = query;
	setProjectNameWithoutCheck(project);
	setTeamNameWithoutCheck(team);
	try {
		if (await dontAllow({
			req, res, query: getRecordings, status: 'ifNotLogged', queryArguments: { team, project },
		}) !== false) return {};
		if (await dontAllow({
			req, res, query: loadSettings, status: 'ifNotLogged', queryArguments: { team, project },
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
