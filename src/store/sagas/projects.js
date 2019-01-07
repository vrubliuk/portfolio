import { delay } from "redux-saga";
import { select } from "redux-saga/effects";
//import * as actions from "../actions";
import * as API from "../../API";


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

export function* saveProjects() {
  yield delay(2000)
  const {projects} = yield select(store => store.projects)
  try {
    yield API.putProjects(projects);
  } catch (err) {
    alert(err);
  }
}

export function* saveProjectScreenshot({projectId, file}) {
  yield delay(2000)
  try {
    yield API.putProjectScreenshot(projectId, file);
  } catch (err) {
    alert(err);
  }
}

export function* deleteProjectScreenshot({projectId}) {
  yield delay(2000)
  try {
    yield API.deleteProjectScreenshot(projectId);
  } catch (err) {
    alert(err);
  }
}
