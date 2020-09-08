import { Formik } from 'formik';
import Form from 'react-bootstrap-plus/Form';
import Button from 'react-bootstrap-plus/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default function (p) {
	return (
  <Formik
  onSubmit={p.renameTeam}
  initialValues={{
				name: p.name,
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
				handleBlur,
				values,
				touched,
				isValid,
				errors,
			}) => (
  <Form inline="" onSubmit={handleSubmit} className="mb-3">
  <Form.Group>
  <Form.Label className="mr-3">New Team Name</Form.Label>
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
  Rename Team
						{ p.renaming
          && <FontAwesomeIcon className="fa-spin ml-2" icon={faCog} /> }
					</Button>
				</Form>
			)}
		</Formik>
	);
}
