﻿// import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import {setToken} from "../actions";
// import * as API from "../../API";

export function* logIn(action) {
  yield console.log("log in")
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

export function* logOut() {
  yield put(setToken(null));
}

