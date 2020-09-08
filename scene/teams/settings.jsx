import { connect } from 'react-redux';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Alert from 'react-bootstrap-plus/Alert';
import Layout from '@/scene/comps/layout';
import SideBar from './comps/sidebar';
import RenameTeam from './comps/RenameTeam';
import DeleteTeam from './comps/DeleteTeam';
import { operations as teamOperations } from '@/store/teams';

function mapDispatchToInitialProps(dispatch) {
	return {
		setName: (name) => dispatch(teamOperations.setName(name)),
		getProjecs: (name) => dispatch(teamOperations.getProjects(name)),
	};
}
function mapStateToProps(state) {
	return {
		renameResp: state.teams.RENAME_TEAM,
		removeResp: state.teams.REMOVE_TEAM,
		name: state.teams.name,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		rename: (v) => dispatch(teamOperations.rename(v)),
		remove: (name) => dispatch(teamOperations.remove(name)),
	};
}

function Home({ renameResp, removeResp, name, rename, remove }) {
	return (
		<Layout title="Home | Redhive Behavioral analytics">
			<div className="row h-100">
				<SideBar team={name} active="Team Settings" className="col-md-3 col-xl-2 col-1 sidebar" />
				<div className="col-md-9 col-xl-10 col-11 pt-3">
					<h4 className="pb-1">Settings</h4>
					<RenameTeam
						name={name}
						renameTeam={(v) => rename({ oldName: name, newName: v.name })}
						renaming={renameResp.pending}
					/>
					{ renameResp.recv && (
						<Alert variant="success">
							Team Renamed:
							<Link
								as={`/${name}`}
								href={`/[team]/?team=${name}`}
							>
								<a>
									{name}
								</a>
							</Link>
						</Alert>
					)}
					{ renameResp.error && <Alert variant="danger">{renameResp.error}</Alert> }
					{ removeResp.recv && <Alert variant="success">Team Deleted</Alert> }
					{ removeResp.error && <Alert variant="danger">{removeResp.error}</Alert> }
					<DeleteTeam removeTeam={() => remove(name)} />
				</div>
			</div>
		</Layout>
	);
}
Home.getInitialProps = async ({
	res, reduxStore, query, req,
}) => {
	const { team } = query;
	const { setName } = mapDispatchToInitialProps(reduxStore.dispatch);
	const redirectOnError = () => (typeof window !== 'undefined'
		? Router.push('/login')
		: (res.writeHead(302, { Location: '/login' }), res.end()));
	const isServer = typeof window === 'undefined';
	try {
		return await setName({
			team,
			opts: {
				...(isServer ? {
					headers: {
						cookie: req.headers.cookie,
					}
				} : {}),
				method: 'head',
			},
		});
	} catch (error) {
		return redirectOnError();
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
