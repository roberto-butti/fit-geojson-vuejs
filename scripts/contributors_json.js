const https = require('https');
const fs = require('fs');

const filePath = './public/contributors.json';

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/repos/roberto-butti/fit-geojson-vuejs/contributors',
	method: 'GET',
	headers: { 'user-agent': 'node.js' }
};

const req = https.request(options, (res) => {
	let data = '';

	if (res.statusCode !== 200) {
		return console.error('Something went wrong');
	}

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		const json = JSON.parse(data);
		const users = json
			.filter(el => el.type === 'User')
			.map(el => ({
				login: el.login,
				avatar_url: el.avatar_url,
				html_url: el.html_url,
				site_admin: el.site_admin,
				contributions: el.contributions
			}));

		fs.writeFileSync(filePath, JSON.stringify(users, undefined, 4));
	});
});

req.on('error', (error) => {
	console.error(error)
});

req.end();