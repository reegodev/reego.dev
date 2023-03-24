import { getImageUrl } from '../src/lib/social-image.js';

console.log(
	getImageUrl(
		'Looking at the new v-memo directive in Vue 3.2',
		'See how we can optimise parts of our templates with this new directive',
		new Date(),
		'10 min read'
	)
);
