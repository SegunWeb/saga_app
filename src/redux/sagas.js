import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_POST, REQUEST_POSTS} from "./types";
import {hideLoader, showAlert, showLoader} from "./action";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    
    try {
        yield put(showLoader());
        const payload = yield call(fetchPost);
        yield put({type: FETCH_POST, payload});
        yield put(hideLoader())
    }
    catch (e) {
        yield put(showAlert(`Что-то пошло не так  -  ${e}`))
        yield put(hideLoader())
    }
}

export const fetchPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await res.json();
};