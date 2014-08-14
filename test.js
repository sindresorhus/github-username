'use strict';
var assert = require('assert');
var githubUsername = require('./');

it('should get GitHub username from email', function (done) {
	this.timeout(20000);

	githubUsername('sindresorhus@gmail.com', function (err, username) {
		if (err) {
			console.error(err);
			assert(false);
		}

		assert.equal(username, 'sindresorhus');
		done();
	});
});
