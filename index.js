'use strict';
const ghGot = require('gh-got');

async function searchCommits(email, token) {
	const result = await ghGot('search/commits', {
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
	});

	const {body: data} = result;

	if (data.total_count === 0) {
		throw new Error(`Couldn't find username for \`${email}\``);
	}

	return data.items[0].author.login;
}

module.exports = async (email, token) => {
	if (!(typeof email === 'string' && email.includes('@'))) {
		throw new Error('Email required');
	}

	const result = await ghGot('search/users', {
		token,
		query: {
			q: `${email} in:email`
		},
		headers: {
			'user-agent': 'https://github.com/sindresorhus/github-username'
		}
	});

	const {body: data} = result;

	if (data.total_count === 0) {
		return searchCommits(email, token);
	}

	return data.items[0].login;
};
