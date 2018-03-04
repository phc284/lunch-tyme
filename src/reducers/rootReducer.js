import { combineReducers } from 'redux';

import StoresReducer from './stores_reducer';
import DetailsReducer from './details_reducer';

const rootReducer = combineReducers({
	stores: StoresReducer,
	details: DetailsReducer
});

export default rootReducer;
