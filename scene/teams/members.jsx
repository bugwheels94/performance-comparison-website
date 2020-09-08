import { connect } from 'react-redux';
import React from 'react';
import Alert from 'react-bootstrap-plus/Alert';
import Layout from '@/scene/comps/layout';
import { operations as teamOperations } from '@/store/teams';
import { operations as memberOperations } from '@/store/teamMembers';
import dontAllow from '@/utils/redirect';
import PaginateResource from '@/scene/comps/PaginateResource';
import FetchComponent from '@/scene/comps/FetchComponent';
import BreadCrumb from '@/scene/comps/BreadCrumb';
import SideBar from './comps/sidebar';
import AddMember from './comps/AddMember';
import ManageMember from './comps/ManageMember';

function mapStateToProps(state) {
	return {
		teamName: state.teams.name,
		getMembersTracker: state.members.getAllTracker,
		createMemberTracker: state.members.createTracker,
		updateMemberTracker: state.members.updateTracker,
		removeMemberTracker: state.members.removeTracker,
	};
}
function mapDispatchToInitialProps(dispatch) {
	return {
		setTeamNameWithoutCheck: (name) => dispatch(teamOperations.setNameWithoutCheck(name)),
		getMembers: (q) => dispatch(memberOperations.getAll(q)),
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getMembers: (q) => dispatch(memberOperations.getAll(q)),
		createMember: (v) => dispatch(memberOperations.create(v)),
		updateMember: (v) => dispatch(memberOperations.update(v)),
		removeMember: (v) => dispatch(memberOperations.remove(v)),
	};
}

const Home = ({
	teamName,
	getMembers,
	getMembersTracker,
	createMemberTracker,
	updateMemberTracker,
	removeMemberTracker,
	createMember,
	updateMember,
	removeMember,
}) => (
	<Layout title="Home | Redhive Behavioral analytics">
		<div className="row h-100">
			<SideBar team={teamName} active="Members" className="col-md-3 col-xl-2 col-1 sidebar" />
			<div className="col-md-9 col-xl-10 col-11 pt-3">
				<BreadCrumb list={[
					{ text: teamName, href: '/[team]', as: `/${teamName}` },
					{ text: 'Members', active: true },
				]}
				/>
				<h4 className="pb-1">Members</h4>
				<AddMember
					add={(details) => createMember({ details, teamName })}
				/>
				<FetchComponent tracker={createMemberTracker}>
					{() => (
						<Alert variant="success">
							Member Added
						</Alert>
					)}
				</FetchComponent>

				<PaginateResource
					tracker={getMembersTracker}
					getAllArguments={{ teamName }}
					getAll={getMembers}
					FilterComponent={() => null}
					initialSearchOptions={{ role: 'readers' }}
				>
					{(data, searchOptions) => (
						<ul className="list-group small">
							{data.received.map((member) => (
								<ManageMember
									key={member._id}
									memberID={member._id}
									role={searchOptions.role}
									email={member.email}
									updateTracker={updateMemberTracker}
									update={(e) => updateMember({
										memberID: member._id, role: e.target.value, teamName,
									})}
									remove={() => removeMember({ memberID: member._id, teamName })}
									removeTracker={removeMemberTracker}
								/>
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
	const { getMembers, setTeamNameWithoutCheck } = mapDispatchToInitialProps(reduxStore.dispatch);
	setTeamNameWithoutCheck(team);
	try {
		if (await dontAllow({
			req, res, query: getMembers, status: 'ifNotLogged', queryArguments: { teamName: team, params: { role: 'readers' } },
		}) !== false) return {};
		return {};
	} catch (e) {
		return {};
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
