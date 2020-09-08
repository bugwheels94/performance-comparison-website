import { Validator } from 'jsonschema';

const v = new Validator();
export default (body) => {
	const teamSchema = {
		id: '/team',
		type: 'object',
		additionalProperties: false,
		properties: {
			name: {
				type: 'string',
				minLength: 1,
				maxLength: 30,
				pattern: /^[a-zA-Z0-9-_]+$/,
			},
		},
		required: ['name'],
	};
	const result = v.validate(body, teamSchema);
	if (result.errors.length) {
		return `${result.errors[0].property} ${result.errors[0].message}`;
	}
};
