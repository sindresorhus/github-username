# github-username [![Build Status](https://travis-ci.org/sindresorhus/github-username.svg?branch=master)](https://travis-ci.org/sindresorhus/github-username)

> Get a GitHub username from an email address


## Install

```
$ npm install github-username
```


## Usage

```js
const githubUsername = require('github-username');

(async () => {
	console.log(await githubUsername('sindresorhus@gmail.com'));
	//=> 'sindresorhus'
})();
```


## API

### githubUsername(email, [token])

Returns a `Promise<string>` with the username.

#### email

Type: `string`

Email address for the user of whom you want the username.

#### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).


## Related

- [github-username-cli](https://github.com/sindresorhus/github-username-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
