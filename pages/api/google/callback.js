const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const DB = require('@/utils/db');

const oauth2Client = new google.auth.OAuth2(
	process.env.GOOGLE_ID,
	process.env.GOOGLE_SECRET,
	process.env.GOOGLE_URL,
);
const ObjectId = require('mongodb').ObjectID;

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
	'https://www.googleapis.com/auth/userinfo.profile',
	'https://www.googleapis.com/auth/userinfo.email',
];

const url = oauth2Client.generateAuthUrl({
	// 'online' (default) or 'offline' (gets refresh_token)
	access_type: 'offline',

	// If you only need one scope you can pass it as a string
	scope: scopes,
});

const handler = async (req, res) => {
	let data;
	if (req.query.code === undefined) {
		if (process.env.dev) {
			data = {
				name: 'Test User',
				email: 'test@rhba.com',
				id: 'test',
			};
		} else {
			return res.writeHead(301, {
				Location: `https://${process.env.host}`,
			});
		}
	}
	try {
		if (req.query.code !== undefined) {
			const code = req.query;
			const { tokens } = await oauth2Client.getToken(code.code);
			oauth2Client.setCredentials(tokens);
			const oauth2 = google.oauth2({
				auth: oauth2Client,
				version: 'v2',
			});
			({ data } = await oauth2.userinfo.get());
		}
		const db = await DB();
		const users = db.collection('users');
		const user = await users.findOneAndUpdate({
			$or: [
				{ email: data.email },
				{ 'google.id': data.id },
			],
		}, {
			$setOnInsert: {
				name: data.name,
				email: data.email,
				teams: [],
			},
			$set: {
				google: data,
			},
		}, {
			returnOriginal: false,
			upsert: true,
		});
		if (user.lastErrorObject.upserted) {
			const teams = db.collection('teams');
			const id = [user.lastErrorObject.upserted];

			await teams.insertOne({
				name: new ObjectId(),
				admins: id,
				readers: id,
				writers: id,
				isIndividual: true,
			});
		}
		const token = jwt.sign({ a: user.value._id }, process.env.jwtkey);
		res.writeHead(302, {
			Location: `https://${process.env.host}/dashboard/overview`,
			'Set-Cookie': `rhba=${token};Domain=${process.env.host};Max-age=2592000;Path=/;Secure;HttpOnly;SameSite=Strict`,
		});
	} catch (e) {
		res.writeHead(301, {
			Location: `https://${process.env.host}`,
		});
	}
	res.end();
};

export default handler;
//  instead of export default handler;
