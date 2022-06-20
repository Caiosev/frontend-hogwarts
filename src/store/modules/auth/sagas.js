/* eslint-disable react-hooks/rules-of-hooks */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
    const { login, senha } = payload;
    try {
        const { data } = yield call(axios.post, '/tokens', { login, senha });
        yield put(actions.loginSuccess(data));
        toast.success('Login realizado com sucesso!');
        payload.navigate('/dashboard');
    } catch (error) {
        toast.error('Usuario ou senha incorretos');
        yield put(actions.loginFailure());
    }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
