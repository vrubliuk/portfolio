import { select, put } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as API from "../../API";

export function* createEducation() {
  yield put(actions.adjustRequestsQuantity(1));
  const { educations } = yield select(store => store.educations);
  try {
    const { data } = yield API.postEducation({ speciality: "", institution: "", startDate: "", endDate: "", priority: educations.length + 1 });
    yield put(actions.setEducations([...educations, data]));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* updateEducation({ id, payload }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { educations } = yield select(store => store.educations);
  const educationsCopy = [...educations];
  const educationIndex = educationsCopy.findIndex(l => l._id === id);
  educationsCopy[educationIndex] = { ...educations[educationIndex], ...payload };
  yield put(actions.setEducations(educationsCopy));
  try {
    yield API.putEducation(id, payload);
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* moveEducation({ id, direction }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { educations } = yield select(store => store.educations);
  const educationsCopy = [...educations];
  const education = educationsCopy.find(l => l._id === id);
  const anotherEducation = educationsCopy.find(l => l.priority === education.priority + direction);
  education.priority += direction;
  anotherEducation.priority -= direction;
  yield put(actions.setEducations(educationsCopy));
  try {
    yield Promise.all([API.putEducation(id, { priority: education.priority }), API.putEducation(anotherEducation._id, { priority: anotherEducation.priority })]);
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* deleteEducation({ id }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { educations } = yield select(store => store.educations);
  try {
    yield API.deleteEducation(id);
    yield put(actions.setEducations(educations.filter(l => l._id !== id)));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

