import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
import App5 from './App5';

import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<App5 />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
