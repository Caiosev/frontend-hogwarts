import { combineReducers } from 'redux';

import auth from './auth/reducer';
import scrollReducer from './scroll/reducer';

export default combineReducers({
    auth,
    scrollReducer,
});
