import { Formik } from 'formik';
import React from 'react';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';

export default function ({ create }) {
	return (
		<Formik
			onSubmit={create}
			initialValues={{
				name: '',
			}}
			validate={(values) => {
				const errors = {};
				if (!values.name) {
					errors.name = 'Required';
				} else if (values.name.trim().length > 30) {
					errors.name = 'Max Length is 30 Chars';
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
				<Form inline="" onSubmit={handleSubmit} className="mb-3">
					<Form.Group>
						<Form.Label className="mr-3">Team Name</Form.Label>
						<Form.Control
							placeholder="New team"
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							isInvalid={!!errors.name}
							isValid={touched.name && !errors.name}
						/>
						<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
					</Form.Group>
					<Button type="submit" className="mr-3">
						Create Team
					</Button>
				</Form>
			)}
		</Formik>
	);
}
