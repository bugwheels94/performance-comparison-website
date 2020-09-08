import React from 'react';
import { connect } from 'react-redux';
import dontAllow from '@/utils/redirect';
import Layout from '@/scene/comps/layout';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamsOperations } from '@/store/teams';
import { operations as tracksOperations } from '@/store/tracks';
import { operations as recordingsOperations } from '@/store/recordings';
import PaginateResource from '@/scene/comps/PaginateResource';
import Link from 'next/link';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import SideBar from '../projects/comps/sidebar';

const mapDispatchToProps = (dispatch) => ({
	getTracks: (opts) => dispatch(tracksOperations.getAll(opts)),
});

const mapDispatchToInitialProps = (dispatch) => ({
	setProjectNameWithoutCheck: (project) => dispatch(projectsOperations.setNameWithoutCheck(project)),
	setTeamNameWithoutCheck: (team) => dispatch(teamsOperations.setNameWithoutCheck(team)),
	getTracks: (opts) => dispatch(tracksOperations.getAll(opts)),
	setRecordingID: (opts) => dispatch(recordingsOperations.setID(opts)),
});

const mapStateToProps = (state) => ({
	projectName: state.projects.name,
	getTracksTracker: state.tracks.getAllTracker,
	teamName: state.teams.name,
	recordingID: state.recordings.recordingID,
});


const Home = ({
	projectName,
	teamName,
	getTracksTracker,
	getTracks,
	recordingID,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar project={projectName} team={teamName} active="Session Recordings" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={[
					{ text: teamName, href: '/[team]', as: `/${teamName}` },
					{ text: projectName, href: '/[team]/[project]', as: `/${teamName}/${projectName}` },
					{ text: 'Recordings', href: '/[team]/[project]/recordings', as: `/${teamName}/${projectName}/recordings` },
					{ text: 'Tracks', active: true },
				]}
				/>
				<PaginateResource
					tracker={getTracksTracker}
					getAllArguments={{ teamName, projectName, recordingID }}
					getAll={getTracks}
					FilterComponent={() => null}
				>
					{(data, searchOptions) => (
						<ul className="list-group small">
							{data.received.map((track, i) => (
								<li className="list-group-item rounded-0" key={track._id}>
									<Link
										as={`/${teamName}/${projectName}/tracks/${track._id}`}
										href="/[team]/[project]/tracks/[track]"
									>
										<a>
											Track
											{ searchOptions.offset + i + 1}
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
	res, reduxStore, req, query,
}) => {
	const {
		setProjectNameWithoutCheck, setTeamNameWithoutCheck, getTracks, setRecordingID,
	} = mapDispatchToInitialProps(reduxStore.dispatch);
	const {
		project, team, recordingID,
	} = query;
	setTeamNameWithoutCheck(team);
	setProjectNameWithoutCheck(project);
	setRecordingID(recordingID);
	try {
		if (await dontAllow({
			req, res, query: getTracks, status: 'ifNotLogged', queryArguments: { teamName: team, projectName: project, recordingID },
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
