import * as actionTypes from "./actionTypes";

export const updateResume = file => {
  return {
    type: actionTypes.UPDATE_RESUME,
    file
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