import * as types from '../types';

export function ativaNav() {
    return {
        type: types.ATIVAR_NAV,
    };
}

export function desativaNav() {
    return {
        type: types.DESATIVAR_NAV,
    };
}
