import * as actionTypes from "./actionTypes";


export const setEducation = (payload) => {
  return {
    type: actionTypes.SET_EDUCATION,
    payload
  };
};

export const saveEducation = () => {
  return {
    type: actionTypes.SAVE_EDUCATION,
  };
};