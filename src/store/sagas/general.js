import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as API from "../../API";

export function* updateGeneral({ payload }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { _id } = yield select(store => store.general.general);
  yield put(actions.setGeneral(payload));
  try {
    yield API.putUser(_id, payload);
  } catch (err) {
    alert(err.response.data.message);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}
