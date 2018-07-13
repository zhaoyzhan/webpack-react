import {
	combineReducers
}
from 'redux';

import HomeReducer from './home-reducer.js';
import LoginReducer from './login_reducer.js';

const RootReducer = combineReducers({
	home: HomeReducer,
	login: LoginReducer
});

export default RootReducer;