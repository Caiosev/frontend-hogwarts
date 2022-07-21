/* eslint-disable default-param-last */
import * as types from '../types';
import axios from '../../../services/axios';

const initalState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
    loggedAs: false,
};

export default function (state = initalState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            console.log(action);
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.loggedAs = action.payload.options;
            return newState;
        }
        case types.LOGIN_FAILURE: {
            const newState = { ...initalState };
            delete axios.defaults.headers.Authorization;
            return newState;
        }
        default: {
            return state;
        }
    }
}
