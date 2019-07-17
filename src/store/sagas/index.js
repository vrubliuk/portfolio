import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getUser } from "./user";
import { logIn, logOut } from "./auth";
import { saveGeneral } from "./general";
import { saveContacts } from "./contacts";
import { createSkill, updateSkill, moveSkill, deleteSkill } from "./skills";
import { createExperience, updateExperience, moveExperience, deleteExperience } from "./experiences";
import { createEducation, updateEducation, moveEducation, deleteEducation } from "./educations";
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
  yield takeEvery(actionTypes.CREATE_SKILL, createSkill);
  yield takeLatest(actionTypes.UPDATE_SKILL, updateSkill);
  yield takeEvery(actionTypes.MOVE_SKILL, moveSkill);
  yield takeEvery(actionTypes.DELETE_SKILL, deleteSkill);
}

export function* watchExperiences() {
  yield takeEvery(actionTypes.CREATE_EXPERIENCE, createExperience);
  yield takeLatest(actionTypes.UPDATE_EXPERIENCE, updateExperience);
  yield takeEvery(actionTypes.MOVE_EXPERIENCE, moveExperience);
  yield takeEvery(actionTypes.DELETE_EXPERIENCE, deleteExperience);
}

export function* watchEducations() {
  yield takeEvery(actionTypes.CREATE_EDUCATION, createEducation);
  yield takeLatest(actionTypes.UPDATE_EDUCATION, updateEducation);
  yield takeEvery(actionTypes.MOVE_EDUCATION, moveEducation);
  yield takeEvery(actionTypes.DELETE_EDUCATION, deleteEducation);
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
