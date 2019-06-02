/**
Get a GitHub username from an email address.

@param email - Email address for the user of whom you want the username.
@param token - GitHub [personal access token](https://github.com/settings/tokens/new).
@returns The username for the `email`.

@example
```
import githubUsername = require('github-username');

(async () => {
	console.log(await githubUsername('sindresorhus@gmail.com'));
	//=> 'sindresorhus'
})();
```
*/
declare function githubUsername(email: string, token?: string): Promise<string>;

export = githubUsername;
