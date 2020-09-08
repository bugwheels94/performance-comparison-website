const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
	process.env.GOOGLE_ID,
	process.env.GOOGLE_SECRET,
	process.env.GOOGLE_URL,
);

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

const handler = (req, res) => {
	res.writeHead(302, { Location: url });
	res.end();
};

export default handler;
//  instead of export default handler;
