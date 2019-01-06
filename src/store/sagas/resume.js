import { delay } from "redux-saga";
import { select } from "redux-saga/effects";
// import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveResume() {
  yield delay(2000)
  const {resume} = yield select(store => store.resume)
  try {
    yield API.putResume(resume);
  } catch (err) {
    alert(err);
  }
}

export function* deleteResume() {
  yield delay(2000)
 
  try {
    yield API.deleteResume();
  } catch (err) {
    alert(err);
  }
}