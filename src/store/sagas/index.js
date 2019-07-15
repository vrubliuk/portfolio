import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getUser } from "./user";
import { logIn, logOut } from "./auth";
import { saveGeneral } from "./general";
import { saveContacts } from "./contacts";
import { saveSkills } from "./skills";
import { createExperience, updateExperience, moveExperience, deleteExperience } from "./experiences";
import { saveEducation } from "./education";
import { createLanguage, updateLanguage, moveLanguage, deleteLanguage } from "./languages";
import { getProjects, saveProjects, saveProjectScreenshot, deleteProjectScreenshot } from "./projects";
import { saveResume, deleteResume } from "./resume";

export function* watchUser() {
  yield takeEvery(actionTypes.GET_USER, getUser);
}

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
  yield takeEvery(actionTypes.CREATE_EXPERIENCE, createExperience);
  yield takeLatest(actionTypes.UPDATE_EXPERIENCE, updateExperience);
  yield takeEvery(actionTypes.MOVE_EXPERIENCE, moveExperience);
  yield takeEvery(actionTypes.DELETE_EXPERIENCE, deleteExperience);
}

export function* watchEducation() {
  yield takeLatest(actionTypes.SAVE_EDUCATION, saveEducation);
}

export function* watchLanguages() {
  yield takeEvery(actionTypes.CREATE_LANGUAGE, createLanguage);
  yield takeLatest(actionTypes.UPDATE_LANGUAGE, updateLanguage);
  yield takeEvery(actionTypes.MOVE_LANGUAGE, moveLanguage);
  yield takeEvery(actionTypes.DELETE_LANGUAGE, deleteLanguage);
}

export function* watchProjects() {
  yield takeLatest(actionTypes.GET_PROJECTS, getProjects);
  yield takeLatest(actionTypes.SAVE_PROJECTS, saveProjects);
  yield takeEvery(actionTypes.SAVE_PROJECT_SCREENSHOT, saveProjectScreenshot);
  yield takeEvery(actionTypes.DELETE_PROJECT_SCREENSHOT, deleteProjectScreenshot);
}

export function* watchResume() {
  yield all([takeLatest(actionTypes.SAVE_RESUME, saveResume), takeLatest(actionTypes.DELETE_RESUME, deleteResume)]);
}
