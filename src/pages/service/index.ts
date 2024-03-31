import { handleActivate, handleMessageReceived } from './handlers';

self.addEventListener('activate', handleActivate);

chrome.runtime.onMessage.addListener(handleMessageReceived);
