import { combineReducers } from 'redux';

import StoreReducer from './stores_reducer';


const rootReducer = combineReducers({
	stores: StoreReducer
});

export default rootReducer;
