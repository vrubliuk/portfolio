import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import * as API from "../utility/API";

export function* logIn(action) {
  // yield put(actionCreators.setLoader(true));
  try {
    // const res = yield API.postEmailPassword(action.email, action.password);
    // yield (localStorage.refreshTokenRequirements = res.data.refreshToken);
    // yield put(actionCreators.setToken(res.data.idToken));
    // yield put(actionCreators.closeModal());
    // yield put(actionCreators.setLoader(false));
  } catch (err) {
    // yield put(actionCreators.setLoader(false));
    // yield put(actionCreators.toggleError());
    // yield delay(2000);
    // yield put(actionCreators.toggleError());
  }
}

