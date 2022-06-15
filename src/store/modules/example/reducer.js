import * as types from '../types';

const initalState = {
    botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initalState, action) {
    switch (action.type) {
        case types.BOTAO_CLICADO_SUCCESS: {
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            console.log(newState.botaoClicado);
            return newState;
        }
        case types.BOTAO_CLICADO_FAILURE: {
            console.log('Erro ao clicar no botão');
            return state;
        }
        case types.BOTAO_CLICADO_REQUEST: {
            console.log('BOTAO_CLICADO_REQUEST');
            return state;
        }
        default: {
            return state;
        }
    }
}
