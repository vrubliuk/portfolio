import * as actionTypes from "./actionTypes";

export const setGeneral = (payload) => {
  return {
    type: actionTypes.SET_GENERAL,
    payload
  };
};

export const saveGeneral = () => {
  return {
    type: actionTypes.SAVE_GENERAL,
  };
};