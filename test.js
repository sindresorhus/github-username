import test from 'ava';
import githubUsername from './index.js';

test('gets GitHub username from email', async t => {
	t.is(await githubUsername('sindresorhus@gmail.com'), 'sindresorhus');
});

test('gets GitHub username from email using Commit Search API', async t => {
	t.is(await githubUsername('markdotto@gmail.com'), 'mdo');
});

test('rejects when GitHub has no user for the email', async t => {
	await t.throwsAsync(githubUsername('nogithubaccount@example.com'));
});

test('rejects when email is missing', async t => {
	await t.throwsAsync(githubUsername());
});

test('rejects when email is invalid', async t => {
	await t.throwsAsync(githubUsername('sindresorhus_gmail.com'));
});

test('rejects when email is not a string', async t => {
	await t.throwsAsync(githubUsername(() => 'sindresorhus_gmail.com'));
});
