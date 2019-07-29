import { takeEvery, put, all, call } from 'redux-saga/effects'
import {actionTypes} from './actionTypes'

const delay = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
})

export function* incrementAsync(action) {
    
    
    yield put({ type: actionTypes.TOGGLE_LOADING })
    yield call(delay, action.payload)
    yield put({ type: actionTypes.INCREMENT})
    yield put({ type: actionTypes.TOGGLE_LOADING })
    
}

export function* watchIncrementAsync() {
    
    yield takeEvery(actionTypes.INCREMENT_ASYNC, incrementAsync)
}

export default function* rootSaga() {
    yield all([watchIncrementAsync()])
}