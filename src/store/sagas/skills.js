import { delay } from "redux-saga";
import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveSkills() {
  yield delay(2000)
  // const {languages} = yield select(store => store.languages)
  // try {
  //   yield API.putLanguages(languages);
  // } catch (err) {
  //   alert(err);
  // }
}