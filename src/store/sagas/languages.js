import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import { select } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as API from "../../API";

export function* createLanguage({ name, level }) {
  const { languages } = yield select(store => store.languages);
  try {
    const { data } = yield API.postLanguage({ name, level, priority: languages.length + 1 });
    yield put(actions.setLanguages([...languages, data]));
  } catch (err) {
    alert(err);
  }
}

export function* updateLanguage({ id, payload }) {
  const { languages } = yield select(store => store.languages);
  const languagesCopy = [...languages];
  const languageIndex = languagesCopy.findIndex(l => l._id === id);
  languagesCopy[languageIndex] = { ...languages[languageIndex], ...payload };
  yield put(actions.setLanguages(languagesCopy));
  yield delay(2000);
  try {
    yield API.putLanguage(id, payload);
  } catch (err) {
    alert(err);
  }
}

export function* moveLanguage({ id, direction }) {
  const { languages } = yield select(store => store.languages);
  const languagesCopy = [...languages];
  const language = languagesCopy.find(l => l._id === id);
  const anotherLanguage = languagesCopy.find(l => l.priority === language.priority + direction);
  language.priority = language.priority + direction;
  anotherLanguage.priority = anotherLanguage.priority - direction;
  yield put(actions.setLanguages(languagesCopy));
  try {
    yield Promise.all([API.putLanguage(id, { priority: language.priority }), API.putLanguage(anotherLanguage._id, { priority: anotherLanguage.priority })]);
  } catch (err) {
    alert(err);
  }
}

export function* deleteLanguage({ id }) {
  const { languages } = yield select(store => store.languages);
  try {
    yield API.deleteLanguage(id);
    yield put(actions.setLanguages(languages.filter(l => l._id !== id)));
  } catch (err) {
    alert(err);
  }
}
