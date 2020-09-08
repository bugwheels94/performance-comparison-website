import React from 'react';
import { connect } from 'react-redux';
import dontAllow from '@/utils/redirect';
import Layout from '@/scene/comps/layout';
import { operations as projectsOperations } from '@/store/projects';
import { operations as teamsOperations } from '@/store/teams';
import { operations as tracksOperations } from '@/store/tracks';
import FetchComponent from '@/scene/comps/FetchComponent';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import Track from './comps/track';
import SideBar from '../projects/comps/sidebar';

const mapDispatchToProps = (dispatch) => ({
});

const mapDispatchToInitialProps = (dispatch) => ({
	setProjectNameWithoutCheck: (project) => dispatch(projectsOperations.setNameWithoutCheck(project)),
	setTeamNameWithoutCheck: (team) => dispatch(teamsOperations.setNameWithoutCheck(team)),
	getTrack: (opts) => dispatch(tracksOperations.get(opts)),
});

const mapStateToProps = (state) => ({
	projectName: state.projects.name,
	getTrackTracker: state.tracks.getTracker,
	teamName: state.teams.name,
});


const Home = ({
	projectName,
	teamName,
	getTrackTracker,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar project={projectName} team={teamName} active="Session Recordings" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={[
					{ text: teamName, href: '/[team]', as: `/${teamName}` },
					{ text: projectName, href: '/[team]/[project]', as: `/${teamName}/${projectName}` },
					{ text: 'View Track', active: true },
				]}
				/>
				<h4 className="pb-1">
					Track
				</h4>
				<FetchComponent tracker={getTrackTracker}>
					{(data) => (
						<Track track={data.received} team={teamName} project={projectName} />
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
		setProjectNameWithoutCheck, setTeamNameWithoutCheck, getTrack,
	} = mapDispatchToInitialProps(reduxStore.dispatch);
	const {
		project, team, track,
	} = query;
	setTeamNameWithoutCheck(team);
	setProjectNameWithoutCheck(project);
	try {
		if (await dontAllow({
			req, res, query: getTrack, status: 'ifNotLogged', queryArguments: { teamName: team, projectName: project, track },
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
