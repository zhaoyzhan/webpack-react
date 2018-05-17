import {
	combineReducers
}
from 'redux';

import HomeReducer from './home-reducer.js';

const RootReducer = combineReducers({
	home: HomeReducer
});

export default RootReducer;