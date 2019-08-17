// import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import * as API from "../../API";
import axios from "../../axios";

export function* logIn({promise, login, password}) {
  // yield put(actions.setToken(1));
      
  try { 
    const {data} = yield API.logIn(login,password);
    console.log(data);
    yield put(actions.setToken(data.token));
    yield (axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`);
    promise.resolve();
  } catch (err) {
    promise.reject(err);
  }
  
  
  

  // yield (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
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
  yield put(actions.setToken(null));
}

