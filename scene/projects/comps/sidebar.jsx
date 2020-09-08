import {
	faHome, faFire, faRecordVinyl, faFilter, faStickyNote, faCog,
} from '@fortawesome/free-solid-svg-icons';
import SideBar from '@/scene/comps/sidebar';

const ds = [
	{
		text: 'Project Summary', hre: '', className: 'sidebar_opt-top', i: faHome,
	},
	{
		text: 'Heatmaps(Pending)', hre: 'heatmaps', className: '', i: faFire,
	},
	{
		text: 'Session Recordings', hre: 'recordings', className: '', i: faRecordVinyl,
	},
	{
		text: 'Conversion Funnels(Pending)', hre: 'funnels', className: '', i: faFilter,
	},
	{
		text: 'Form Analysis(Pending)', hre: 'form', className: '', i: faStickyNote,
	},
	{
		text: 'Project Settings(Pending)', hre: 'settings', className: '', i: faCog,
	},
];

const OverviewSideBar = (p) => {
	const d = ds.map((d) => {
		const t = { ...d };
		t.href = t.as || `/[team]/[project]/${d.hre}`;
		t.as = t.as || `/${p.team}/${p.project}/${t.hre}`;
		return t;
	});
	return <SideBar ds={d} {...p} />;
};

export default OverviewSideBar;
