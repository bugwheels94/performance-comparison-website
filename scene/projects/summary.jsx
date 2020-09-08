import React from 'react';
import { connect } from 'react-redux';
import Layout from '@scene/comps/layout';
import { operations as teamOperations } from '@/store/teams';
import { operations as projectOperations } from '@/store/projects';
import dontAllow from '@/utils/redirect';
import FetchComponent from '@/scene/comps/FetchComponent';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import SideBar from './comps/sidebar';


function mapDispatchToInitialProps(dispatch) {
	return {
		setTeamNameWithoutCheck: (name) => dispatch(teamOperations.setNameWithoutCheck(name)),
		setProjectName: (obj) => dispatch(projectOperations.setName(obj)),
	};
}
function mapStateToProps(state) {
	return {
		projectName: state.projects.name,
		getProjectTracker: state.projects.setNameTracker,
		teamName: state.teams.name,
	};
}

const Home = ({ projectName, teamName, getProjectTracker }) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar project={projectName} team={teamName} active="Project Summary" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={[
					{ text: teamName, href: '/[team]', as: `/${teamName}` },
					{ text: projectName, active: true },
				]}
				/>
				<h4 className="pb-1">Summary</h4>
				<p>Embed Code : </p>
				<code>
					<pre>
						<FetchComponent tracker={getProjectTracker}>
							{
								(data) => `<!-- Embed Code -->
<script>
  (function(h,o,t,j,a,r){
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;r.src=t;
    a.appendChild(r);
  })(window,document,'https://lvh.me/api/static/${data.received._id}');
</script>`
							}
						</FetchComponent>
					</pre>
				</code>
			</div>
		</div>
	</Layout>
);

Home.getInitialProps = async ({
	reduxStore, query, req, res,
}) => {
	const { team, project } = query;
	const { setTeamNameWithoutCheck, setProjectName } = mapDispatchToInitialProps(reduxStore.dispatch);
	setTeamNameWithoutCheck(team);
	try {
		if (await dontAllow({
			req, res, query: setProjectName, status: 'ifNotLogged', queryArguments: { team, project },
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};

export default connect(mapStateToProps)(Home);
