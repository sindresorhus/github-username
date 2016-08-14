/* eslint-env mocha */
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

it('should get GitHub username from email and return a promise', function () {
	this.timeout(20000);

	return githubUsername('sindresorhus@gmail.com').then(function (username) {
		assert.equal(username, 'sindresorhus');
	});
});

it('should fail when github has no user for the email', function () {
	this.timeout(20000);

	return githubUsername('nogithubaccount@example.com')
		.then(function () {
			assert.ok(false);
		})
		.catch(function (err) {
			assert.equal(err.message, 'Couldn\'t find a username for the supplied email');
		});
});
