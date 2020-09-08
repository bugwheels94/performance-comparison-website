import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';
import { Formik, FieldArray } from 'formik';
import React from 'react';
import Alert from 'react-bootstrap-plus/Alert';
import Spinner from 'react-bootstrap-plus/Spinner';
import FormURL from './form-url';

export default ({ postFunnel }) => (
	<Formik
		initialValues={{
			path: [],
		}}
		onSubmit={postFunnel}
		validate={(values) => {
			const errors = {};
			if (values.path.length === 0) return { empty: true }
			values.path.map((wl, i) => {
				if (wl.value.trim() === '') {
					errors[i] = 'Required';
				}
			});
			return errors;
		}}
	>
		{({ handleSubmit }) => (
			<Form onSubmit={handleSubmit}>
				<FieldArray component={FormURL} name="path" />
				<Button variant="success" type="submit" size="sm">
					Create Funnel
				</Button>
			</Form>
		)}
	</Formik>
);
