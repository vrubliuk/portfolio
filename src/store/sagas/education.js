import { delay } from "redux-saga";
import { select } from "redux-saga/effects";
// import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveEducation() {
  yield delay(2000)
  const {speciality, institution, startDate, endDate} = yield select(store => store.profile.education)
  try {
    yield API.putEducation(speciality, institution, startDate, endDate);
  } catch (err) {
    alert(err);
  }
}

