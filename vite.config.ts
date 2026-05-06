import { sveltekit } from '@sveltejs/kit/vite';
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
		include: ['src/**/*.{test,spec}.ts'],
		environment: 'node',
		globals: false
	}
});
