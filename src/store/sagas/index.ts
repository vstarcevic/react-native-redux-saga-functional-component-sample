import {all} from 'redux-saga/effects';
import {watchIncrementAsync} from './counter';
 

function* rootSaga() {
 yield all([watchIncrementAsync()    ]);
}
 
export default rootSaga;
