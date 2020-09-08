import React from 'react';
import Table from 'react-bootstrap-plus/Table';
import Pagination from 'react-bootstrap-plus/Pagination';
import Link from 'next/link';
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default ({
	funnels,
	team,
	project,
	filter,
	loadFunnels,
}) => (
	<>
		<Table>
			<thead>
				<tr>
					<th>Path</th>
				</tr>
			</thead>
			<tbody>
				{!funnels.length && <tr><td colSpan="2">No Funnels Found</td></tr>}
				{funnels.map((funnel) => (
					<tr key={funnel._id}>
						<td>
							<Link
								as={`/${team.name}/${project.name}/funnels/${funnel._id}`}
								href={`/[team]/[project]/funnels/[funnel]`}
							>
								<a>{funnel.body.map(entry => `${entry.value}(${entry.type})`).join(' -> ')}</a>
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
		<Pagination className="justify-content-center">
			<Pagination.Prev disabled={filter.offset <= 0} onClick={() => loadFunnels({ project: project.name, team: team.name, filter: { limit: filter.limit, offset: filter.offset - 10 } })} />
			<Pagination.Next onClick={() => loadFunnels({ project: project.name, team: team.name, filter: { limit: filter.limit, offset: filter.offset + 10 } })} />
		</Pagination>
	</>
);
