import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logIn } from "./auth";


export function* watchAuth() {
  yield takeLatest(actionTypes.LOG_IN, logIn);
}

// export function* watchData() {
//   yield all([takeLatest(actionTypes.INIT_ADD_ROW, initAddRow), takeLatest(actionTypes.INIT_UPDATE_ROW, initUpdateRow), takeLatest(actionTypes.INIT_DELETE_ROW, initDeleteRow)]);
// }

// export function* watchGlobal() {
//   yield takeEvery(actionTypes.UPDATE_DATA, updateData);
// }
