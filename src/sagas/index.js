import {watchShowLocalStorage} from './ShowLocalStorage'
import { all } from 'redux-saga/effects'
export default function *rootSaga(){
    yield all([
        watchShowLocalStorage()
    ])
}