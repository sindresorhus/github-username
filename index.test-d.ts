import {expectType} from 'tsd';
import githubUsername = require('.');

expectType<Promise<string | undefined>>(
	githubUsername('sindresorhus@gmail.com', 'deadbeef')
);
