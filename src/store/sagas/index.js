import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logIn, logOut } from "./auth";
import { saveGeneral } from "./general";
import { saveContacts } from "./contacts";
import { saveSkills } from "./skills";
import { saveExperiences } from "./experiences";
import { saveEducation } from "./education";
import { saveLanguages } from "./languages";
import { getProjects, saveProjects } from "./projects";
import { saveResume, deleteResume } from "./resume";

export function* watchAuth() {
  yield all([takeLatest(actionTypes.LOG_IN, logIn), takeEvery(actionTypes.LOG_OUT, logOut)]);
}

export function* watchGeneral() {
  yield takeLatest(actionTypes.SAVE_GENERAL, saveGeneral);
}

export function* watchContacts() {
  yield takeLatest(actionTypes.SAVE_CONTACTS, saveContacts);
}

export function* watchSkills() {
  yield takeLatest(actionTypes.SAVE_SKILLS, saveSkills);
}

export function* watchExperiences() {
  yield takeLatest(actionTypes.SAVE_EXPERIENCES, saveExperiences);
}

export function* watchEducation() {
  yield takeLatest(actionTypes.SAVE_EDUCATION, saveEducation);
}

export function* watchLanguages() {
  yield takeLatest(actionTypes.SAVE_LANGUAGES, saveLanguages);
}

export function* watchProjects() {
  yield takeLatest(actionTypes.GET_PROJECTS, getProjects);
  yield takeLatest(actionTypes.SAVE_PROJECTS, saveProjects);
}

export function* watchResume() {
  yield all([takeLatest(actionTypes.SAVE_RESUME, saveResume), takeLatest(actionTypes.DELETE_RESUME, deleteResume)]);
}
