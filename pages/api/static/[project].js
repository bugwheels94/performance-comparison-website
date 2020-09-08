import { ObjectID } from 'mongodb';
import { promises as fs } from 'fs';
import fg from 'fast-glob';
import jwt from 'jsonwebtoken';
import { _Error, errorHandler } from '../../../utils/error';
import DB from '../../../utils/db';

const regex = [
	{ name: 'Windows 10', regex: new RegExp('(Windows 10.0|Windows NT 10.0)') },
	{ name: 'Windows 10', regex: new RegExp('(Windows 10.0|Windows NT 10.0)') },
	{ name: 'Windows 8.1', regex: new RegExp('(Windows 8.1|Windows NT 6.3)') },
	{ name: 'Windows 8', regex: new RegExp('(Windows 8|Windows NT 6.2)') },
	{ name: 'Windows 7', regex: new RegExp('(Windows 7|Windows NT 6.1)') },
	{ name: 'Windows Vista', regex: new RegExp('Windows NT 6.0') },
	{ name: 'Windows Server 2003', regex: new RegExp('Windows NT 5.2') },
	{ name: 'Windows XP', regex: new RegExp('(Windows NT 5.1|Windows XP)') },
	{ name: 'Windows 2000', regex: new RegExp('(Windows NT 5.0|Windows 2000)') },
	{ name: 'Windows ME', regex: new RegExp('(Win 9x 4.90|Windows ME)') },
	{ name: 'Windows 98', regex: new RegExp('(Windows 98|Win98)') },
	{ name: 'Windows 95', regex: new RegExp('(Windows 95|Win95|Windows_95)') },
	{ name: 'Windows NT 4.0', regex: new RegExp('(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)') },
	{ name: 'Windows CE', regex: new RegExp('Windows CE') },
	{ name: 'Windows 3.11', regex: new RegExp('Win16') },
	{ name: 'Android', regex: new RegExp('Android') },
	{ name: 'Open BSD', regex: new RegExp('OpenBSD') },
	{ name: 'Sun OS', regex: new RegExp('SunOS') },
	{ name: 'Chrome OS', regex: new RegExp('CrOS') },
	{ name: 'Linux', regex: new RegExp('(Linux|X11)') },
	{ name: 'iOS', regex: new RegExp('(iPhone|iPad|iPod)') },
	{ name: 'Mac OS X', regex: new RegExp('Mac OS X') },
	{ name: 'Mac OS', regex: new RegExp('(MacPPC|MacIntel|Mac_PowerPC|Macintosh)') },
	{ name: 'QNX', regex: new RegExp('QNX') },
	{ name: 'UNIX', regex: new RegExp('UNIX') },
	{ name: 'BeOS', regex: new RegExp('BeOS') },
	{ name: "OS'2", regex: new RegExp('OS\\/2') },
	{ name: 'Search Bot', regex: new RegExp('(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves"Teoma|ia_archiver)') },
];
function os(ua) {
	for (let i = 0; i < regex.length; i++) {
		if (ua.match(regex[i].regex)) {
			return regex[i].name;
		}
	}
	return 'None';
}

function browser(ua) {
	let tem;
	let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return `IE ${tem[1] || ''}`;
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
		if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	return M.join(' ');
}
const globs = Promise.all([
	fg([
		'./embed/public/js/loaders*.js',
		'./embed/public/js/recordings*.js',
	], { objectMode: true }),
]);
let embed;
const handler = async (req, res) => {
	const { project } = req.query;
	try {
		const db = await DB();
		const teamsCollection = db.collection('teams');
		const projectRecord = await teamsCollection.findOne({
			'projects._id': new ObjectID(project),
		}, {
			projection: {
				_id: 0,
				'projects.$': 1,
			},
		});
		if (projectRecord === null) {
			return errorHandler(res, new _Error('Project Does not exist', 404));
		}
		const fileNames = await globs;
		embed = fs.readFile(fileNames[0][0].path);
		const code = await embed;
		const realProject = projectRecord.projects[0]
		return res.send(`rhba = {id: "${realProject._id}",funnel:${!!realProject.funnels.length}, record:${realProject.script.recording},record_file:"${fileNames[0][1].name}"};${code}`);
	} catch (e) {
		return errorHandler(res, new _Error('Project Does not exist', 500, e));
	}
};

export default handler;
//  instead of export default handler;
