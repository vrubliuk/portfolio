import { select, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as API from "../../API";

export function* createProject() {
  yield put(actions.adjustRequestsQuantity(1));
  const { projects } = yield select(store => store.projects);
  try {
    const { data } = yield API.postProject({ name: "", screenshot:"", websiteUrl: "", repositoryUrl: "", summary: "",  tags: [""], priority: projects.length + 1 });
    yield put(actions.setProjects([...projects, data]));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* updateProject({ id, payload }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { projects } = yield select(store => store.projects);
  const projectsCopy = [...projects];
  const projectIndex = projectsCopy.findIndex(p => p._id === id);
  projectsCopy[projectIndex] = { ...projectsCopy[projectIndex], ...payload };
  yield put(actions.setProjects(projectsCopy));
  try {
    yield API.putProject(id, payload);
  } catch (err) {
    alert(err); 
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* updateProjectScreenshot({ id, file }) {
  yield put(actions.adjustRequestsQuantity(1));
  try {
    const {data} = yield API.putProjectScreenshot(id, file);
    const { projects } = yield select(store => store.projects);
    const projectsCopy = [...projects];
    const projectIndex = projectsCopy.findIndex(p => p._id === id);
    projectsCopy[projectIndex] = { ...projectsCopy[projectIndex], screenshot: data.screenshot };
    yield put(actions.setProjects(projectsCopy));
  } catch (err) {
    alert(err); 
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* moveProject({ id, direction }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { projects } = yield select(store => store.projects);
  const projectsCopy = [...projects];
  const project = projectsCopy.find(p => p._id === id);
  const anotherProject = projectsCopy.find(p => p.priority === project.priority + direction);
  project.priority += direction;
  anotherProject.priority -= direction;
  yield put(actions.setProjects(projectsCopy));
  try {
    yield Promise.all([API.putProject(id, { priority: project.priority }), API.putProject(anotherProject._id, { priority: anotherProject.priority })]);
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* deleteProject({ id }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { projects } = yield select(store => store.projects);
  try {
    yield API.deleteProject(id);
    yield put(actions.setProjects(projects.filter(p => p._id !== id)));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* deleteProjectScreenshot({ id }) {
  yield put(actions.adjustRequestsQuantity(1));
  try {
    yield API.deleteProjectScreenshot(id);
    const { projects } = yield select(store => store.projects);
    const projectsCopy = [...projects];
    const projectIndex = projectsCopy.findIndex(p => p._id === id);
    projectsCopy[projectIndex] = { ...projectsCopy[projectIndex], screenshot: "" };
    yield put(actions.setProjects(projectsCopy  ));
  } catch (err) {
    alert(err); 
  }
  yield put(actions.adjustRequestsQuantity(-1));
}