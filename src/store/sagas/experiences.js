import { delay } from "redux-saga";
import {  select } from "redux-saga/effects";
// import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveExperiences() {
  yield delay(2000)
  const {experiences} = yield select(store => store.experiences)
  try {
    yield API.putExperiences(experiences);
  } catch (err) {
    alert(err);
  }
}


