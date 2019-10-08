import { put, takeEvery } from 'redux-saga/effects'

function* showLocalStorage(action) {
  localStorage.setItem(
    action.headliner,
    !action.currentlyTracked
  );
  yield put({ ...action, type: 'TOGGLE_SHOW' })
}

export function* watchShowLocalStorage() {
  yield takeEvery('REQUEST_TOGGLE_SHOW', showLocalStorage)
}