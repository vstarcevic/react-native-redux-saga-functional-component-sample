import {call, put, takeEvery} from 'redux-saga/effects';

export function* handleIncrementAsync() {
  yield put({type: 'INCREMENT'});
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', handleIncrementAsync);
}