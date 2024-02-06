import { condebug } from '~src/utilities/functions';

/**
 * The handler for the `activate` event from the Service Worker.
 */
export function handleActivate() {
	const now = new Date();
	condebug(now.toISOString(), 'service:handleActivate');
}
