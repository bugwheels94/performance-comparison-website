import React from 'react';
import Link from 'next/link';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = ({ ds, active, className }) => (
	<div className={className}>
		{ds.map((d, i) => (
			<Link href={d.href} as={d.as} key={d.href}>
				<a className={
					`sidebar_opt ${d.className} ${d.text === active ? 'sidebar_opt-active' : ''}`
				}
				>
					<FontAwesomeIcon icon={d.i} className="sidebar_icon" />
					<span className="sidebar_txt d-none d-md-inline">{ d.text }</span>
				</a>
			</Link>
		))}
	</div>
);


export default SideBar;
