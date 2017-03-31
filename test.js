import test from 'ava';
import m from './';

test('gets GitHub username from email', async t => {
	t.is(await m('sindresorhus@gmail.com'), 'sindresorhus');
});

test('rejects when GitHub has no user for the email', async t => {
	await t.throws(m('nogithubaccount@example.com'));
});

test('rejects when email is missing', async t => {
	await t.throws(m());
});

test('rejects when email is invalid', async t => {
	await t.throws(m('sindresorhus_gmail.com'));
});

test('rejects when email is not a string', async t => {
	await t.throws(m(() => 'sindresorhus_gmail.com'));
});
