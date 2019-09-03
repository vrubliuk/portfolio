import * as actionTypes from "./actionTypes";

export const setSkills = payload => {
  return {
    type: actionTypes.SET_SKILLS,
    payload
  };
};

export const createSkill = () => {
  return {
    type: actionTypes.CREATE_SKILL
  };
};

export const updateSkill = (id, payload) => {
  return {
    type: actionTypes.UPDATE_SKILL,
    id,
    payload
  };
};

export const moveSkill = (id, direction) => {
  return {
    type: actionTypes.MOVE_SKILL,
    id,
    direction
  };
};

export const deleteSkill = id => {
  return {
    type: actionTypes.DELETE_SKILL,
    id
  };
};
