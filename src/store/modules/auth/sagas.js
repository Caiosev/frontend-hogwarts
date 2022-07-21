/* eslint-disable react-hooks/rules-of-hooks */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload);
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        yield put(
            actions.loginSuccess({
                ...response.data,
                options: payload.options,
                navigate: payload.navigate,
            })
        );
        toast.success('Login realizado com sucesso!');
        if (payload.options === 'prof') payload.navigate('/painel');
        if (payload.options === 'aluno') payload.navigate('/provas');
    } catch (error) {
        console.log(error);
        toast.error('Usuario ou senha incorretos');
        yield put(actions.loginFailure());
    }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
