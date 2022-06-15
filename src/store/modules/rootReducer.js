import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';
import scrollReducer from './scroll/reducer';

export default combineReducers({
    exampleReducer,
    scrollReducer,
});
