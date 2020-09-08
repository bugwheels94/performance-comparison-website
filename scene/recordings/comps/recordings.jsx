import React from 'react';
import Table from 'react-bootstrap-plus/Table';
import Pagination from 'react-bootstrap-plus/Pagination';
import Link from 'next/link';
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default ({
	recordings,
	team,
	project,
	filter,
	loadRecordings,
}) => (
	<>
		<Table>
			<thead>
				<tr>
					<th>URL</th>
					<th>Count</th>
				</tr>
			</thead>
			<tbody>
				{!recordings.length && <tr><td colSpan="2">No Recordings Found</td></tr>}
				{recordings.map((recording) => (
					<tr key={recording._id}>
						<td>
							<Link
								as={`/${team.name}/${project.name}/recordings/${recording._id}/tracks`}
								href={`/[team]/[project]/recordings/[recordingID]/tracks`}
							>
								<a>{recording.url}</a>
							</Link>
						</td>
						<td>
							<a>{recording.tracks.count}</a>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
		<Pagination className="justify-content-center">
			<Pagination.Prev disabled={filter.offset <= 0} onClick={() => loadRecordings({ project: project.name, team: team.name, filter: { limit: filter.limit, offset: filter.offset - 10 } })} />
			<Pagination.Next onClick={() => loadRecordings({ project: project.name, team: team.name, filter: { limit: filter.limit, offset: filter.offset + 10 } })} />
		</Pagination>
	</>
);
