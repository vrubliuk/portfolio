import { put } from "redux-saga/effects";
import * as actions from "../actions";
import * as API from "../../API";
import axios from "../../axios";


export function* logIn({ promise, login, password }) {
  try {
    const { data } = yield API.logIn(login, password);
    yield put(actions.setToken(data.token));
    yield (axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`);
    yield sessionStorage.setItem("portfolioToken", data.token);
    promise.resolve();
  } catch (err) {
    promise.reject(err);
  }
}

export function* logOut() {
  yield put(actions.setToken(null));
  yield sessionStorage.removeItem("portfolioToken");
}
