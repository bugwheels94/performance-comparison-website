import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const roles = [
	['Contains', 'contains'],
	['Exact Match', 'exact'],
	['Regex', 'regex'],
	['Starts With', 'starts'],
	['Ends With', 'ends'],
];
export default ({
	form, remove, push, name,
}) => {
	const {
		values, handleChange, errors, touched,
	} = form;
	return (
		<>
			<h5>
				{name.toUpperCase()}
				{' '}
				URLS
			</h5>
			{values[name].length > 0 ? (
				<>
					{values[name].map((wl, index) => (
						<Form.Row key={index}>
							<div className="col mb-2">
								<Form.Control
									type="text"
									size="sm"
									name={`${name}.${index}.value`}
									value={wl.value}
									onChange={handleChange}
									isInvalid={errors[name] && !!errors[name][index]}
									isValid={errors[name] && !errors[name][index]}
								/>
								<Form.Control.Feedback type="invalid">
									{errors[name] && errors[name][index]}
								</Form.Control.Feedback>
							</div>
							<div className="col mb-2">
								<Form.Control
									as="select"
									name={`${name}.${index}.type`}
									value={wl.type}
									size="sm"
									onChange={handleChange}
								>
									{roles.map((r) => <option value={r[1]} key={r[1]}>{r[0]}</option>)}
								</Form.Control>
							</div>
							<div className="col mb-2">
								<Button
									size="sm"
									variant="danger"
									onClick={() => remove(index)}
								>
									<FontAwesomeIcon icon={faTrash} />
								</Button>
							</div>
						</Form.Row>
					))}
					<Form.Row>
						<div className="col mb-3">
							<Button
								size="sm"
								onClick={() => push({ type: 'exact', value: '' })}
							>
								Add One More URL to
								{' '}
								{name}
							</Button>
						</div>
					</Form.Row>
				</>
			) : (
				<Form.Row>
					<div className="col my-3">
						<Button
							type="button"
							onClick={() => push({
								type: 'exact',
								value: '',
							})}
							size="sm"
						>
							Add URL to
							{' '}
							{name}
						</Button>
					</div>
				</Form.Row>
			)}
		</>
	);
};
