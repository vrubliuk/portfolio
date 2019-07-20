import * as actionTypes from "./actionTypes";

export const setResume = payload => {
  return {
    type: actionTypes.SET_RESUME,
    payload
  };
};

export const updateResume = payload => {
  return {
    type: actionTypes.UPDATE_RESUME,
    payload
  };
};

export const saveResume = () => {
  return {
    type: actionTypes.SAVE_RESUME
  };
};

export const deleteResume = () => {
  return {
    type: actionTypes.DELETE_RESUME
  };
};
