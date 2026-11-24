import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
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
		// attributes set at runtime (Svelte 5's runtime does this). Per CSP3
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
				// Hash for the inline geo-state probe in app.html. Update both
				// the script and this hash together — see the comment above
				// the <script> tag in src/app.html for the regen one-liner.
				'script-src': [
					'self',
					// Cloudflare Web Analytics beacon (src/app.html).
					'https://static.cloudflareinsights.com',
					'sha256-YjRSrAKEGHPwjPxI6ABzc0d/mNrZGyyxmPVARbQXKlU='
				],
				'style-src': ['self', 'unsafe-inline'],
				'font-src': ['self'],
				'img-src': ['self', 'data:'],
				'connect-src': ['self', 'https://cloudflareinsights.com'],
				'frame-ancestors': ['none'],
				'base-uri': ['self'],
				'form-action': ['self'],
				// Browsers POST violation reports here. Logged via Workers
				// observability logs so we hear about CSP breakage early.
				'report-uri': ['/api/csp-report']
			}
		}
	}
};

export default config;
