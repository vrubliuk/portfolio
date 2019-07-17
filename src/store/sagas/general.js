import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveGeneral() {
  yield put(actions.adjustRequestsQuantity(1));
  const {_id, name, surname, qualification} = yield select(store => store.general.general)
  try {
    yield API.putUser(_id, {name, surname, qualification});
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}
