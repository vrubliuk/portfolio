import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveContacts() {
  yield put(actions.adjustRequestsQuantity(1));
  const {_id} = yield select(store => store.general.general)
  const {location, phone, email, github, linkedIn} = yield select(store => store.contacts.contacts)
  try {
    yield API.putUser(_id, {location, phone, email, github, linkedIn});
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}
