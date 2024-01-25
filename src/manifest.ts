import packageJson from '../package.json';
import { ManifestV3 } from '../plugins/manifest-types';

const manifest: ManifestV3 = {
	manifest_version: 3,
	name: '__MSG_extension_name__',
	author: '__MSG_extension_author__',
	version: packageJson.version,
	version_name: `${packageJson.version}`,
	description: '__MSG_extension_description__',

	// Definition for the pop-up.
	action: {
		default_title: 'Minimum Chrome Extension',
		default_popup: 'src/pages/popup/index.html',
	},
};

export default manifest;
