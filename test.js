'use strict';
var assert = require('assert');
var githubUsername = require('./');

it('should get GitHub username from email', function (cb) {
	this.timeout(20000);

	githubUsername('sindresorhus@gmail.com', function (err, username) {
		assert(!err, err);
		assert.equal(username, 'sindresorhus');
		cb();
	});
});
