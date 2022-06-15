import { all } from 'redux-saga/effects';
import exempleSaga from './example/sagas';

export default function* rootSaga() {
    return yield all([exempleSaga]);
}
