import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logIn, logOut } from "./auth";
import { saveContacts, saveEducation } from "./profile"
import { saveLanguages } from "./languages"
import {getProjects} from "./projects"


export function* watchAuth() {
 
  
  yield all([takeLatest(actionTypes.LOG_IN, logIn), takeLatest(actionTypes.LOG_OUT, logOut)])
}

export function* watchProfile() {
  // yield takeLatest(actionTypes.SAVE_CONTACTS, saveContacts)
  yield all([takeLatest(actionTypes.SAVE_CONTACTS, saveContacts),
    takeLatest(actionTypes.SAVE_EDUCATION, saveEducation)
    
  ])
}

export function* watchLanguages() {
 yield takeLatest(actionTypes.SAVE_LANGUAGES, saveLanguages)
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
