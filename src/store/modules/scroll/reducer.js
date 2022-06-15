import * as types from '../types';

const initalState = {
    ativar_nav: false,
};

// eslint-disable-next-line default-param-last
export default function ScrollReducer(state = initalState, action) {
    switch (action.type) {
        case types.ATIVAR_NAV: {
            const newState = { ...state };
            newState.ativar_nav = true;
            return newState;
        }
        case types.DESATIVAR_NAV: {
            const newState = { ...state };
            newState.ativar_nav = false;
            return newState;
        }
        default: {
            return state;
        }
    }
}
