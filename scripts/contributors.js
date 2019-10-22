const https = require('https');
const fs = require('fs');

const filePath = './CONTRIBUTORS.md';

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

		const users = json.filter(el => el.type === 'User');

		fs.writeFileSync(filePath, '## Contributors\n\n<table>\n<tr>');

		for (let i = 0; i < users.length; i++) {
			if (i !== 0 && i % 7 === 0) fs.appendFileSync(filePath, '<tr/>\n<tr>')

			fs.appendFileSync(filePath, `<td align="center" valign="top">
			<a href="${users[i].html_url}">
			<img src="${users[i].avatar_url}" width="100px;" alt="${users[i].login}" /><br />
			<sup><b>${users[i].login}</b></sup></a><br />${users[i].site_admin ? '<sup>ADMIN</sup><br />' : ''}
			<sup>Contributions: ${users[i].contributions}</sup>
			</td>`);
		}

		fs.appendFileSync(filePath, '</tr>\n</table>');
	});
});

req.on('error', (error) => {
	console.error(error)
});

req.end();