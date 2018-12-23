import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logIn, logOut } from "./auth";
import {getProjects} from "./projects"


export function* watchAuth() {
 
  
  yield all([takeLatest(actionTypes.LOG_IN, logIn), takeLatest(actionTypes.LOG_OUT, logOut)])
}

export function* watchProjects() {
  yield takeLatest(actionTypes.GET_PROJECTS, getProjects);
}


// export function* watchData() {
//   yield all([takeLatest(actionTypes.INIT_ADD_ROW, initAddRow), takeLatest(actionTypes.INIT_UPDATE_ROW, initUpdateRow), takeLatest(actionTypes.INIT_DELETE_ROW, initDeleteRow)]);
// }

// export function* watchGlobal() {
//   yield takeEvery(actionTypes.UPDATE_DATA, updateData);
// }
