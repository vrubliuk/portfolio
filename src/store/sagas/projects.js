import { delay } from "redux-saga";
import {  } from "redux-saga/effects";
// import * as actions from "../actions";
// import * as API from "../../API";

export function* getProjects(action) {
  yield delay(2000);
  yield console.log("getting project")
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
