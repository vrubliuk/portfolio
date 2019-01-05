import { delay } from "redux-saga";
import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveSkills() {
  yield delay(2000)
  const {categories} = yield select(store => store.skills)
  try {
    yield API.putSkills(categories);
  } catch (err) {
    alert(err);
  }
}