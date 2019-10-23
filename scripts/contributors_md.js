const fs = require('fs');
const filePath = './CONTRIBUTORS.md';
const users = require('../public/contributors.json');

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