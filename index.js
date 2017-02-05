'use strict';
const ghGot = require('gh-got');

module.exports = (email, token) => {
	if (!(typeof email === 'string' && email.includes('@'))) {
		throw new Error('Email required');
	}

	return ghGot('search/users', {
		token,
		query: {
			q: `${email} in:email`
		},
		headers: {
			'user-agent': 'https://github.com/sindresorhus/github-username'
		}
	}).then(result => {
		const data = result.body;

		if (data.total_count === 0) {
			return ghGot('search/commits', {
				token,
				query: {
					q: `author-email:${email}`,
					sort: 'author-date',
					// eslint-disable-next-line camelcase
					per_page: 1
				},
				headers: {
					accept: 'application/vnd.github.cloak-preview',
					'user-agent': 'https://github.com/sindresorhus/github-username'
				}
			}).then(result => {
				const data = result.body;

				if (data.total_count === 0) {
					throw new Error(`Couldn't find username for \`${email}\``);
				}

				return ghGot(`user/${data.items[0].author_id}`, {
					token
				});
			}).then(result => {
				const data = result.body;
				return data.login;
			});
		}

		return data.items[0].login;
	});
};
