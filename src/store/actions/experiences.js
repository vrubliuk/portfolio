import * as actionTypes from "./actionTypes";

export const addExperience = () => {
  return {
    type: actionTypes.ADD_EXPERIENCE,
  };
};

export const updateExperience = (experienceIndex, payload) => {
  return {
    type: actionTypes.UPDATE_EXPERIENCE,
    experienceIndex,
    payload
  };
};

export const moveExperience = (experienceIndex, direction) => {
  return {
    type: actionTypes.MOVE_EXPERIENCE,
    experienceIndex,
    direction
  };
};

export const deleteExperience = experienceIndex => {
  return {
    type: actionTypes.DELETE_EXPERIENCE,
    experienceIndex
  };
};

export const saveExperiences = () => {
  return {
    type: actionTypes.SAVE_EXPERIENCES
  };
};
