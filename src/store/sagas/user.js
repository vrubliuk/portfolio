import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as API from "../../API";

export function* getUser({ promise }) {
  try {
    const { data } = yield API.getUser();
    console.log(data);
    const {
      _id,
      name,
      surname,
      qualification,
      avatar,
      location,
      phone,
      email,
      github,
      linkedIn,
      resume,
      skills = [],
      experiences = [],
      educations = [],
      languages = []
    } = data;
    yield put(
      actions.setGeneral({
        _id,
        name,
        surname,
        qualification,
        avatar
      })
    );
    yield put(
      actions.setContacts({
        location,
        phone,
        email,
        github,
        linkedIn
      })
    );
    yield put(actions.setResume(resume));
    yield put(actions.setSkills(skills));
    yield put(actions.setExperiences(experiences));
    yield put(actions.setEducations(educations));
    yield put(actions.setLanguages(languages));
    promise.resolve();
  } catch (err) {
    promise.reject(err);
  }
}

export function* putUserFile({ field, payload }) {
  yield put(actions.adjustRequestsQuantity(1));
  const { _id } = yield select(store => store.general.general);
  try {
    const { data } = yield API.putUser(_id, { [field]: payload });
    if (field === "avatar") yield put(actions.setGeneral({ [field]: data[field] }));
    if (field === "resume") yield put(actions.setResume(data[field]));
  } catch (err) {
    alert(err);
  }
  yield put(actions.adjustRequestsQuantity(-1));
}
