import React from 'react';
import ReactDom from 'react-dom/client';

import Popup from './popup';

import '~style/globals.scss';

ReactDom.createRoot(document.getElementById('app-container')!).render(
	<React.StrictMode>
		<Popup />
	</React.StrictMode>
);
