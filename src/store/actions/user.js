import * as actionTypes from "./actionTypes";

export const getUser = (promise) => {
  return {
    type: actionTypes.GET_USER,
    promise
  };
};