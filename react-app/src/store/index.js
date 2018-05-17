import {
	createStore,
	applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';

import RootReducer from '../a_reducer/index.js';

const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default store;