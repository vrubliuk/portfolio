import { delay } from "redux-saga";
import {  select } from "redux-saga/effects";
// import * as actions from "../actions/index"
import * as API from "../../API";

export function* saveGeneral() {
  yield delay(2000)
  const {_id, name, surname, qualification} = yield select(store => store.general.general)
  try {
    yield API.putUser(_id, {name, surname, qualification});
  } catch (err) {
    alert(err);
  }
}
