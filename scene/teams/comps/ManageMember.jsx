import React from 'react';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';
import InputGroup from 'react-bootstrap-plus/InputGroup';
import FetchComponent from '@/scene/comps/FetchComponent';

const roles = { readers: 'Read', writers: 'Write', admins: 'Admin' };
export default ({
	role, email, remove, removeTracker, update, updateTracker, memberID
}) => (
	<li className="list-group-item rounded-0">
		<InputGroup>
			<Form.Control
				as="select"
				name="role"
				value={role}
				onChange={update}
				className="rounded-0"
			>
				{Object.keys(roles).map((role) => (
					<option value={role} key={role}>
						{ email }
						{' '}
						-
						{ roles[role] }
					</option>
				))}
			</Form.Control>
			<InputGroup.Append>
				<Button variant="danger" size="sm" onClick={remove}>Remove User</Button>
			</InputGroup.Append>
		</InputGroup>
		<FetchComponent tracker={updateTracker} trackingID={memberID}>
			{() => (
				<div className="my-3 alert alert-success">
					Access Changed
				</div>
			)}
		</FetchComponent>
		<FetchComponent tracker={removeTracker} trackingID={memberID}>
			{() => (
				<div className="my-3 alert alert-success">
					Member Removed
				</div>
			)}
		</FetchComponent>
	</li>
);
