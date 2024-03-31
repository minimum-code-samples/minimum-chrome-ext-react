import { condebug } from '~src/utilities/functions';

/**
 * The handler for the `activate` event from the Service Worker.
 */
export function handleActivate() {
	const now = new Date();
	condebug(now.toISOString(), 'service:handleActivate');
}

/**
 * The handler for internally passed messages.
 *
 * @param message - The message sent from other components in the extension.
 * @param sender - The information about the sending component.
 * @param sendResponse - The function to send a response back to the sending component.
 * @returns Returns true so that the
 */
export function handleMessageReceived(
	message: any,
	sender: chrome.runtime.MessageSender,
	sendResponse: (resp: any) => void
) {
	_handleMessageReceived(message, sender, sendResponse);

	return true;
}

function _handleMessageReceived(message: any, sender: chrome.runtime.MessageSender, sendResponse: (resp: any) => void) {
	const _f = 'service/handlers::handleMesageReceived';
	condebug(`Message received`, _f);
}
