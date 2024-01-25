import ReactDom from 'react-dom/client';

import '~style/globals.scss';

ReactDom.createRoot(document.getElementById('app-container')!).render(
	<section>
		<p className="h1">Minimum Chrome Extension</p>
	</section>
);
