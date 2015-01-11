'use strict';
var got = require('got');
var querystring = require('querystring');

module.exports = function (email, token, cb) {
	if (typeof email !== 'string' && email.indexOf('@') !== -1) {
		throw new Error('`email` required');
	}

	if (typeof token === 'function') {
		cb = token;
		token = null;
	}

	var headers = {
		'user-agent': 'https://github.com/sindresorhus/github-username'
	};

	if (token) {
		headers['Authorization'] = 'token ' + token;
	}

	var qs = querystring.stringify({
		q: email + ' in:email'
	});

	got.get('https://api.github.com/search/users?' + qs, {
		headers: headers
	}, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		data = JSON.parse(data);

		if (data.total_count === 0) {
			cb(new Error('Couldn\'t find a username for the supplied email'));
			return;
		}

		cb(null, data.items[0].login);
	});
};
