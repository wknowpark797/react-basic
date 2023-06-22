import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App2 from './App2';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<App2 />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
