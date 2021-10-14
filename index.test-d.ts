import {expectType} from 'tsd';
import githubUsername from './index.js';

expectType<Promise<string | undefined>>(
	githubUsername('sindresorhus@gmail.com', {token: 'deadbeef'}),
);
