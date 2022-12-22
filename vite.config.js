import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		sourcemap: false,
		rollupOptions: {
			sourcemap: false,
			cache: false,
			maxParallelFileOps: 10
		}
	}
};

export default config;
