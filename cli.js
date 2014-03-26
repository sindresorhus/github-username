#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var githubUsername = require('./index');
var input = process.argv[2];

function stdin(cb) {
	var ret = '';
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function (data) { ret += data });
	process.stdin.on('end', function () { cb(ret) }).resume();
}

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ github-username <email> [--token OAUTH-TOKEN]');
	console.log('  $ echo <email> | github-username');
	console.log('');
	console.log('Example');
	console.log('  $ github-username sindresorhus@gmail.com');
	console.log('  sindresorhus');
}

function init(data) {
	var token = process.argv.indexOf('--token');

	if (token !== -1) {
		var val = process.argv[token + 1];
	}

	githubUsername(data, val, function (err, username) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		console.log(username);
	});
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(input);
} else {
	stdin(init);
}
