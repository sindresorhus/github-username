# github-username [![Build Status](https://travis-ci.org/sindresorhus/github-username.svg?branch=master)](https://travis-ci.org/sindresorhus/github-username)

> Get a GitHub username from an email address


## Install

```
$ npm install github-username
```


## Usage

```js
const githubUsername = require('github-username');

githubUsername('sindresorhus@gmail.com').then(username => {
	console.log(username);
	//=> 'sindresorhus'
});
```


## API

### githubUsername(email, [token], [options])

Returns a `Promise` for the username.

#### email

Type: `string`

Email address for the user of whom you want the username.

#### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).

#### options

Type: `object`

Additional [`http-request` options](https://nodejs.org/api/http.html#http_http_request_options_callback) to use.


## Related

- [github-username-cli](https://github.com/sindresorhus/github-username-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
