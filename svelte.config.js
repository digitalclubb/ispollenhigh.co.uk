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
		// are covered without hand-managing tokens.
		//
		// 'unsafe-inline' on style-src is needed for inline style="..."
		// attributes set at runtime (Svelte 5's runtime and the Vercel
		// Analytics / Speed Insights scripts both do this). Per CSP3
		// spec, when nonces/hashes are present 'unsafe-inline' is
		// IGNORED for <style> elements but HONORED for style attributes
		// (hashes don't apply to attributes anyway). So:
		//   - <style> blocks stay strict (hashed/nonced)
		//   - Inline style attributes are allowed
		//   - script-src stays strict (where it actually matters)
		// This is the standard pattern for a SvelteKit site with
		// CSP3-strict scripts.
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'script-src': ['self', 'https://va.vercel-scripts.com'],
				'style-src': ['self', 'unsafe-inline'],
				'font-src': ['self'],
				'img-src': ['self', 'data:'],
				'connect-src': ['self', 'https://vitals.vercel-insights.com'],
				'frame-ancestors': ['none'],
				'base-uri': ['self'],
				'form-action': ['self'],
				// Browsers POST violation reports here. Logged via Vercel
				// function logs so we hear about CSP breakage early.
				'report-uri': ['/api/csp-report']
			}
		}
	}
};

export default config;
