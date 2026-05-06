import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Per-route runtime/regions are configured in each +page.server.ts /
		// +server.ts via `export const config`. Defaults to nodejs.
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			'$lib/*': 'src/lib/*'
		},
		// Content Security Policy. `mode: 'auto'` means SvelteKit emits
		// nonces on dynamic responses and hashes on prerendered ones, so
		// our inline JSON-LD scripts and Svelte's inline <style> blocks
		// are covered without hand-managing tokens. We avoid inline
		// style="..." attributes throughout (they'd require
		// 'unsafe-inline' or 'unsafe-hashes') so style-src can stay
		// strict.
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'script-src': ['self', 'https://va.vercel-scripts.com'],
				'style-src': ['self'],
				'font-src': ['self'],
				'img-src': ['self', 'data:'],
				'connect-src': ['self', 'https://vitals.vercel-insights.com'],
				'frame-ancestors': ['none'],
				'base-uri': ['self'],
				'form-action': ['self']
			}
		}
	}
};

export default config;
