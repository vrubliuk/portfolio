import { select, put } from "redux-saga/effects";
import * as actions from "../actions/index"
import * as API from "../../API";

export function* createSkill() {
  yield put(actions.adjustRequestsQuantity(1));
  const { skills } = yield select(store => store.skills);
  try {
    const { data } = yield API.postSkill({ title: "", technologies: [""], priority: skills.length + 1 });
    yield put(actions.setSkills([...skills, data]));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* updateSkill({ id, payload }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { skills } = yield select(store => store.skills);
  const skillsCopy = [...skills];
  const skillIndex = skillsCopy.findIndex(l => l._id === id);
  skillsCopy[skillIndex] = { ...skills[skillIndex], ...payload };
  yield put(actions.setSkills(skillsCopy));
  try {
    yield API.putSkill(id, payload);
  } catch (err) {
    alert(err); 
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* moveSkill({ id, direction }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { skills } = yield select(store => store.skills);
  const skillsCopy = [...skills];
  const skill = skillsCopy.find(l => l._id === id);
  const anotherSkill = skillsCopy.find(l => l.priority === skill.priority + direction);
  skill.priority = skill.priority + direction;
  anotherSkill.priority = anotherSkill.priority - direction;
  yield put(actions.setSkills(skillsCopy));
  try {
    yield Promise.all([API.putSkill(id, { priority: skill.priority }), API.putSkill(anotherSkill._id, { priority: anotherSkill.priority })]);
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}

export function* deleteSkill({ id }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { skills } = yield select(store => store.skills);
  try {
    yield API.deleteSkill(id);
    yield put(actions.setSkills(skills.filter(l => l._id !== id)));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}