import * as actionTypes from "./actionTypes";

export const logIn = (promise, login, password) => {
  return {
    type: actionTypes.LOG_IN,
    promise,
    login,
    password
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT
  };
};

export const setToken = token => {
  return {
    type: actionTypes.SET_TOKEN,
    token
  };
};
