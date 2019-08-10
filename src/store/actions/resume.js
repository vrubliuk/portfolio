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
