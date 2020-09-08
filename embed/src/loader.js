const d = document;
const h = d.getElementsByTagName('head')[0];
const r = rhba.record;
const load = [];
const u = location.href.replace(/(^\w+:|^)\/\/(?:www\.)?/, '');
const w = r.whitelist || r.blacklist;
const len = r.whitelist ? 0 : 100000;
const filter = w.filter((rule) => (new RegExp(rule)).test(u));
if (filter.length > len) {
	load.push(['record', rhba.record_file]);
}
if (rhba.funnel) {
	load.push(['funnels', rhba.funnel_file]);
}

fetch(`https://api.${URL}/auth/token/browser`, {
	method: 'post',
	body: JSON.stringify({
		screen: '1366x768',
	}),
}).then(res => res.text())
	.then(token => {
		document.cookie = `rhba_jwt=${token}; max-age=31536000; samesite=strict; path=/`;
	})
load.forEach((l) => {
	const s = d.createElement('script');
	s.async = 1;
	s.src = `https://static.${URL}/public/js/${l[1]}`;
	h.appendChild(s);
});
