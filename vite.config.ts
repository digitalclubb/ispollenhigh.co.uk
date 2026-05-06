import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
		strictPort: false
	},
	build: {
		target: 'es2022',
		cssMinify: 'lightningcss'
	},
	test: {
		// Two projects: node-side pure tests use the default node env; component
		// tests run in happy-dom with the svelteTesting plugin so Svelte 5
		// resolves to its browser runtime (lifecycle hooks need it).
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					include: ['src/**/*.{test,spec}.ts'],
					exclude: ['src/**/*.{test,spec}.svelte.ts'],
					environment: 'node'
				}
			},
			{
				extends: true,
				plugins: [svelteTesting()],
				test: {
					name: 'components',
					include: ['src/**/*.{test,spec}.svelte.ts'],
					environment: 'happy-dom'
				}
			}
		]
	}
});
