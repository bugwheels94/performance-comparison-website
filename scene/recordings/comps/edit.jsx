import { faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FieldArray } from 'formik';
import React from 'react';
import Alert from 'react-bootstrap-plus/Alert';
import FetchComponent from '@/scene/comps/FetchComponent';
import FormURL from './form-url';

export default ({ update, tracker, settings }) => (
	<Formik
		initialValues={{
			whitelist: settings.whitelist,
			blacklist: settings.blacklist,
			allowAll: 'whitelist',
		}}
		onSubmit={update}
		validate={(values) => {
			const errors = {};
			['whitelist', 'blacklist'].forEach((n) => {
				if (n !== values.allowAll) return;
				values[n].map((wl, i) => {
					if (wl.value.trim() === '') {
						errors[n] = errors[n] || {};
						errors[n][i] = 'Required';
					}
				});
			});
			return errors;
		}}
	>
		{({ handleSubmit, handleChange, values }) => (
			<Form onSubmit={handleSubmit}>
				{ !settings.initialized && (
					<Alert className="mb-3 alert-primary">
						Please
						{' '}
						<strong>Enable The Recordings</strong>
						{' '}
						by filling the details
					</Alert>
				) }
				<Form.Row>
					<div className="col mb-3">
						<Form.Check
							custom
							label="Record ON ALL pages on which tracking code is installed Except"
							id="record-all1"
							name="allowAll"
							value="blacklist"
							type="radio"
							checked={values.allowAll === 'blacklist'}
							onChange={handleChange}
						/>
						<Form.Check
							custom
							label="Record ONLY ON specified pages below on which tracking code is installed"
							id="record-all2"
							name="allowAll"
							value="whitelist"
							type="radio"
							checked={values.allowAll === 'whitelist'}
							onChange={handleChange}
						/>
					</div>
				</Form.Row>
				{values.allowAll === 'blacklist'
					? <FieldArray name="blacklist" component={FormURL} />
					: <FieldArray name="whitelist" component={FormURL} />}

				<Button variant="success" type="submit" size="sm">
					<FontAwesomeIcon className="mr-2" icon={faPlus} />
					Save Recording Settings
				</Button>
				<FetchComponent tracker={tracker}>
					{() => (
						<div className="my-3 alert alert-success">
							Saved
						</div>
					)}
				</FetchComponent>
			</Form>
		)}
	</Formik>
);
