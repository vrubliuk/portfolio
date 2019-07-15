import { delay } from "redux-saga";
import { put } from "redux-saga/effects";
import { select } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as API from "../../API";

export function* createExperience() {
  yield put(actions.adjustRequestsQuantity(1));
  const { experiences } = yield select(store => store.experiences);
  try {
    const { data } = yield API.postExperience({ position: "", company: "", city: "", startDate: "", endDate: "", priority: experiences.length + 1 });
    yield put(actions.setExperiences([...experiences, data]));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* updateExperience({ id, payload }) {
  const { experiences } = yield select(store => store.experiences);
  const experiencesCopy = [...experiences];
  const experienceIndex = experiencesCopy.findIndex(l => l._id === id);
  experiencesCopy[experienceIndex] = { ...experiences[experienceIndex], ...payload };
  yield put(actions.setExperiences(experiencesCopy));
  yield delay(2000);
  yield put(actions.adjustRequestsQuantity(1));
  try {
    yield API.putExperience(id, payload);
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* moveExperience({ id, direction }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { experiences } = yield select(store => store.experiences);
  const experiencesCopy = [...experiences];
  const experience = experiencesCopy.find(l => l._id === id);
  const anotherExperience = experiencesCopy.find(l => l.priority === experience.priority + direction);
  experience.priority += direction;
  anotherExperience.priority -= direction;
  yield put(actions.setExperiences(experiencesCopy));
  try {
    yield Promise.all([API.putExperience(id, { priority: experience.priority }), API.putExperience(anotherExperience._id, { priority: anotherExperience.priority })]);
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* deleteExperience({ id }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { experiences } = yield select(store => store.experiences);
  try {
    yield API.deleteExperience(id);
    yield put(actions.setExperiences(experiences.filter(l => l._id !== id)));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}
