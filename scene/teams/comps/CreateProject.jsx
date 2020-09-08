import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';

export default function ({ teamName, createProject, className }) {
	return (
		<Formik
			onSubmit={createProject}
			initialValues={{
				teamName,
				name: '',
				description: '',
			}}
			validate={(values) => {
				const errors = {};
				if (!values.name) {
					errors.name = 'Required';
				} else if (values.name.trim().length > 30) {
					errors.name = 'Max Length is 30 Chars';
				}
				if (values.description && values.description.trim().length > 100) {
					errors.description = 'Max Length is 100 Chars';
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

				<Form onSubmit={handleSubmit} className={className}>
					<Form.Group>
						<Form.Label>Project Name</Form.Label>
						<Form.Control
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							isInvalid={touched.name && !!errors.name}
							isValid={touched.name && !errors.name}
						/>
						<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
					</Form.Group>
					<Form.Group>
						<Form.Label>Project Description(Optional)</Form.Label>
						<Form.Control
							as="textarea"
							name="description"
							value={values.description}
							onChange={handleChange}
							isInvalid={!!errors.description}
							isValid={touched.description && !errors.description}
						/>
						<Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
					</Form.Group>
					<Button type="submit" className="mr-3">
						Create
					</Button>
				</Form>
			)}
		</Formik>
	);
}
