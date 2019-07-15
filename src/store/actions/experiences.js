import * as actionTypes from "./actionTypes";

export const setExperiences = payload => {
  return {
    type: actionTypes.SET_EXPERIENCES,
    payload
  };
};

export const createExperience = () => {
  return {
    type: actionTypes.CREATE_EXPERIENCE
  };
};

export const updateExperience = (id, payload) => {
  return {
    type: actionTypes.UPDATE_EXPERIENCE,
    id,
    payload
  };
};

export const moveExperience = (id, direction) => {
  return {
    type: actionTypes.MOVE_EXPERIENCE,
    id,
    direction
  };
};

export const deleteExperience = id => {
  return {
    type: actionTypes.DELETE_EXPERIENCE,
    id
  };
};
