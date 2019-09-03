import { takeEvery, takeLatest, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { getUser, putUserFile } from "./user";
import { logIn, logOut } from "./auth";
import { updateGeneral } from "./general";
import { updateContacts } from "./contacts";
import { createSkill, updateSkill, moveSkill, deleteSkill } from "./skills";
import { createExperience, updateExperience, moveExperience, deleteExperience } from "./experiences";
import { createEducation, updateEducation, moveEducation, deleteEducation } from "./educations";
import { createLanguage, updateLanguage, moveLanguage, deleteLanguage } from "./languages";
import { createProject, updateProject, updateProjectScreenshot, moveProject, deleteProject, deleteProjectScreenshot } from "./projects";
import { updateResume } from "./resume";

export function* watchUser() {
  yield takeEvery(actionTypes.GET_USER, getUser);
  yield takeEvery(actionTypes.PUT_USER_FILE, putUserFile);
}

export function* watchAuth() {
  yield all([takeLatest(actionTypes.LOG_IN, logIn), takeEvery(actionTypes.LOG_OUT, logOut)]);
}

export function* watchGeneral() {
  yield takeEvery(actionTypes.UPDATE_GENERAL, updateGeneral);
}

export function* watchContacts() {
  yield takeEvery(actionTypes.UPDATE_CONTACTS, updateContacts);
}

export function* watchSkills() {
  yield takeEvery(actionTypes.CREATE_SKILL, createSkill);
  yield takeEvery(actionTypes.UPDATE_SKILL, updateSkill);
  yield takeEvery(actionTypes.MOVE_SKILL, moveSkill);
  yield takeEvery(actionTypes.DELETE_SKILL, deleteSkill);
}

export function* watchExperiences() {
  yield takeEvery(actionTypes.CREATE_EXPERIENCE, createExperience);
  yield takeEvery(actionTypes.UPDATE_EXPERIENCE, updateExperience);
  yield takeEvery(actionTypes.MOVE_EXPERIENCE, moveExperience);
  yield takeEvery(actionTypes.DELETE_EXPERIENCE, deleteExperience);
}

export function* watchEducations() {
  yield takeEvery(actionTypes.CREATE_EDUCATION, createEducation);
  yield takeEvery(actionTypes.UPDATE_EDUCATION, updateEducation);
  yield takeEvery(actionTypes.MOVE_EDUCATION, moveEducation);
  yield takeEvery(actionTypes.DELETE_EDUCATION, deleteEducation);
}

export function* watchLanguages() {
  yield takeEvery(actionTypes.CREATE_LANGUAGE, createLanguage);
  yield takeEvery(actionTypes.UPDATE_LANGUAGE, updateLanguage);
  yield takeEvery(actionTypes.MOVE_LANGUAGE, moveLanguage);
  yield takeEvery(actionTypes.DELETE_LANGUAGE, deleteLanguage);
}

export function* watchProjects() {
  yield takeEvery(actionTypes.CREATE_PROJECT, createProject);
  yield takeEvery(actionTypes.UPDATE_PROJECT, updateProject);
  yield takeEvery(actionTypes.UPDATE_PROJECT_SCREENSHOT, updateProjectScreenshot);
  yield takeEvery(actionTypes.MOVE_PROJECT, moveProject);
  yield takeEvery(actionTypes.DELETE_PROJECT, deleteProject);
  yield takeEvery(actionTypes.DELETE_PROJECT_SCREENSHOT, deleteProjectScreenshot);
}

export function* watchResume() {
  yield takeEvery(actionTypes.UPDATE_RESUME, updateResume);
}
