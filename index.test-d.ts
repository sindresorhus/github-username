import {expectType} from 'tsd';
import githubUsername = require('.');

expectType<Promise<string>>(
	githubUsername('sindresorhus@gmail.com', 'deadbeef')
);
