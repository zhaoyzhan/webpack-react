import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import Router from './route/index.js';
import store from './store/index.js';

import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();