
import { select, put } from "redux-saga/effects";
import * as actions from "../actions/index"
import * as API from "../../API";

export function* updateResume({payload}) {
  yield put(actions.adjustRequestsQuantity(1));
  const {_id} = yield select(store => store.general.general)
  yield put(actions.setResume(payload));
  try {
    yield API.putUser(_id, {resume: payload});
  } catch (err) {
    alert(err.response.data.message); 
  }
  yield put(actions.adjustRequestsQuantity(-1));
}