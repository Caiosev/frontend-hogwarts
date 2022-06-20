/* eslint-disable default-param-last */
import * as types from '../types';
import axios from '../../../services/axios';

const initalState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function (state = initalState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            return newState;
        }
        case types.LOGIN_FAILURE: {
            console.log('AAAAAAAAAAAA');
            const newState = { ...initalState };
            delete axios.defaults.headers.Authorization;
            return newState;
        }
        default: {
            return state;
        }
    }
}
