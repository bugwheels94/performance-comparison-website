import { Validator } from 'jsonschema';

const v = new Validator();
export default (body) => {
	const projectSchema = {
		id: '/project',
		type: 'object',
		additionalProperties: false,
		properties: {
			name: {
				type: 'string',
				minLength: 1,
				maxLength: 30,
				pattern: /^[a-zA-Z0-9-_]+$/,
				message: {
					pattern: 'Project Name can only contain alphabets, numbers, hyphen and dash',
				},
			},
			description: {
				type: 'string',
				maxLength: 100,
			},
		},
		required: ['name'],
	};
	const result = v.validate(body, projectSchema);
	if (result.errors.length) {
		return result.errors.join('<br>');
	}
};
