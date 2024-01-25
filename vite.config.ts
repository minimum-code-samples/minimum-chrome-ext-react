import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { resolve } from 'node:path';

import makeManifest from './plugins/make-manifest';

const src = resolve(__dirname, 'src');
const assetsDir = resolve(src, 'assets');
const pagesDir = resolve(src, 'pages');
const styleDir = resolve(src, 'style');

const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'~src': src,
			'~assets': assetsDir,
			'~pages': pagesDir,
			'~public': publicDir,
			'~style': styleDir,
		},
	},
	plugins: [react(), makeManifest()],
	publicDir,
	build: {
		outDir,
		rollupOptions: {
			input: {
				popup: resolve(pagesDir, 'popup', 'index.html'),
			},
			output: {
				entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
			},
		},
	},
});
