import * as actionTypes from "./actionTypes";

export const setEducations = payload => {
  return {
    type: actionTypes.SET_EDUCATIONS,
    payload
  };
};

export const createEducation = () => {
  return {
    type: actionTypes.CREATE_EDUCATION
  };
};

export const updateEducation = (id, payload) => {
  return {
    type: actionTypes.UPDATE_EDUCATION,
    id,
    payload
  };
};

export const moveEducation = (id, direction) => {
  return {
    type: actionTypes.MOVE_EDUCATION,
    id,
    direction
  };
};

export const deleteEducation = id => {
  return {
    type: actionTypes.DELETE_EDUCATION,
    id
  };
};
