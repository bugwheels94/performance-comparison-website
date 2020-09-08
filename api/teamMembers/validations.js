import { Validator } from 'jsonschema';

const v = new Validator();
export default (body) => {
	const memberSchema = {
		id: '/team',
		type: 'object',
		additionalProperties: false,
		properties: {
			role: {
				validateEnum: {
					enum: [
						'readers', 'writers', 'admins',
					],
				},
			},
			email: {
				type: 'string',
				format: 'email',
			},
		},
		required: ['role', 'email'],
	};
	const result = v.validate(body, memberSchema);
	if (result.errors.length) {
		return `${result.errors[0].property} ${result.errors[0].message}`;
	}
};
