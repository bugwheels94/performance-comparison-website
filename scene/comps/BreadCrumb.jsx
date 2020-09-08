import React from 'react';
import Link from 'next/link';

const SideBar = ({ list }) => (
	<nav aria-label="breadcrumb">
		<ol className="breadcrumb p-0 bg-white small">
			{list.map((item) => (
				item.active ? (
					<li className="breadcrumb-item" key={item.text}>
						{ item.text }
					</li>
				) : (
					<li className="breadcrumb-item" key={item.text}>
						<Link as={item.as} href={item.href}><a className="text-dark">{ item.text }</a></Link>
					</li>
				)
			))}
		</ol>
	</nav>
);

export default SideBar;
