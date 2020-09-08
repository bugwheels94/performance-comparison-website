import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome, faFire, faCog, faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import SideBar from '@scene/comps/sidebar';

const ds = [
	{
		text: 'New Project', hre: 'new', className: 'sidebar_opt-top', i: faPlusSquare,
	},
	{
		text: 'Projects', hre: '', className: '', i: faHome,
	},
	{
		text: 'Members', hre: 'members', className: '', i: faFire,
	},
	{
		text: 'Team Settings(Pending)', hre: 'settings', className: '', i: faCog,
	},
];
const OverviewSideBar = (p) => {
	const d = ds.map((d) => {
		const t = { ...d };
		t.href = t.as || `/[team]/${t.hre}`;
		t.as = t.as || `/${p.team}/${t.hre}`;
		return t;
	});
	return <SideBar ds={d} {...p} />;
};

export default OverviewSideBar;
