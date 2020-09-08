import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlusSquare, faBriefcase, faUsers, faWallet, faCog,
} from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../../comps/sidebar';

const ds = [
	{
		text: 'Your Projects', href: '/dashboard/overview', className: '', i: faBriefcase,
	},
	{
		text: 'Teams', href: '/dashboard/teams', className: '', i: faUsers,
	},
	{
		text: 'Plans', href: '/dashboard/plans', className: '', i: faWallet,
	},
	{
		text: 'Settings', href: '/account/settings', className: '', i: faCog,
	},
];
const ProjectSideBar = (p) => <SideBar ds={ds} {...p} />;

export default ProjectSideBar;
