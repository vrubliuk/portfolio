import { delay } from "redux-saga";
import { select, put } from "redux-saga/effects";
import * as actions from "../actions/index"
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

export function* updateResume({payload}) {
  yield put(actions.adjustRequestsQuantity(1));
  const {_id} = yield select(store => store.general.general)
  yield put(actions.setResume(payload));
  try {
    yield API.putUser(_id, {resume: payload});
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}