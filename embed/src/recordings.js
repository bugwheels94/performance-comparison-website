import { record } from 'rrweb';

const cookie = document.cookie.split('; ')
	.find(row => row.startsWith('rhba_jwt'))
	.split('=')[1];
fetch(`https://api.lvh.me/auth/token/recording/${rhba.id}`, {
	method: 'post',
	headers: {
		Authorization: `Bearer ${cookie}`,
	},
}).then(res => res.text()).then(token => {
	let events = '';
	record({
		emit(event) {
			// push event into the events array
			events = `${events}${events === '' ? '' : ','}${JSON.stringify(event)}`;
		},
	});

	// this function will send events to the backend and reset the events array
	function save() {
		fetch(`https://api.${URL}/tracks/data`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: events }),
		});
		events = '';
	}
	// save events every 10 seconds
	setInterval(save, 10 * 1000);
}).catch(e => {})
