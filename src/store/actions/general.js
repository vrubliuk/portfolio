import * as actionTypes from "./actionTypes";

export const setGeneral = (payload) => {
  return {
    type: actionTypes.SET_GENERAL,
    payload
  };
};

export const updateGeneral = (payload) => {
  return {
    type: actionTypes.UPDATE_GENERAL,
    payload
  };
};