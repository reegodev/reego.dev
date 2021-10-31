import adapter from '@sveltejs/adapter-cloudflare-workers'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		target: '#svelte',
		adapter: adapter(),
		router: false,
		hydrate: false,
	}
}

export default config
