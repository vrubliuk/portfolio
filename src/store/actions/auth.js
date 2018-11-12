import * as actionTypes from "./actionTypes";

export const setToken = token => {
  return {
    type: actionTypes.SET_TOKEN,
    token
  };
};

export const logIn = (email, password) => {
  return {
    type: actionTypes.LOG_IN,
    email,
    password
  };
};

