/**
 * Creates the manifest file (JSON) from a TypeScript file.
 */

import * as fs from 'fs';
import * as path from 'path';
import manifest from '../src/manifest';
import type { PluginOption } from 'vite';

import * as cli from '../scripts/cli';

const { resolve } = path;

const outDir = resolve(__dirname, '..', 'public');

export default function makeManifest(): PluginOption {
	return {
		name: 'make-manifest',
		buildEnd() {
			if (!fs.existsSync(outDir)) {
				fs.mkdirSync(outDir);
			}

			const manifestPath = resolve(outDir, 'manifest.json');

			fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

			cli.log(`Manifest file copy complete: ${manifestPath}`, 'success');
		},
	};
}
