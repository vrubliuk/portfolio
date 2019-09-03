import * as actionTypes from "./actionTypes";

export const getUser = promise => ({
  type: actionTypes.GET_USER,
  promise
});

export const putUserFile = (field, payload) => ({
  type: actionTypes.PUT_USER_FILE,
  field,
  payload
});
