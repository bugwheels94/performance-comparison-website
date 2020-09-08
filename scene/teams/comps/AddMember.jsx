import { Formik } from 'formik';
import React from 'react';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const roles = [['readers', 'Read'], ['writers', 'Write'], ['admins', 'Admin']];
export default function ({ add }) {
	return (
		<Formik
			onSubmit={add}
			initialValues={{
				role: roles[0][0],
				email: '',
			}}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (values.email.trim().length > 30) {
					errors.name = 'Max Length is 50 Chars';
				}
				return errors;
			}}
		>
			{({
				handleSubmit,
				handleChange,
				values,
				touched,
				errors,
			}) => (

				<Form onSubmit={handleSubmit} className="mb-3">
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="text"
							name="email"
							value={values.email}
							onChange={handleChange}
							isInvalid={touched.email && !!errors.email}
							isValid={touched.email && !errors.email}
						/>
						<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label className="mr-3">Access</Form.Label>
						<Form.Control
							as="select"
							name="role"
							value={values.role}
							onChange={handleChange}
						>
							{roles.map((r) => <option value={r[0]} key={r[0]}>{ r[1] }</option>)}
						</Form.Control>
					</Form.Group>
					<Button type="submit" className="mr-3">
						Add Member
					</Button>
				</Form>
		  )}
		</Formik>
	);
}
