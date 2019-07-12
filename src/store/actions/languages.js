import * as actionTypes from "./actionTypes";

export const setLanguages = (payload) => {
  return {
    type: actionTypes.SET_LANGUAGES,
    payload
  };
};

export const addLanguage = () => {
  return {
    type: actionTypes.ADD_LANGUAGE,
  };
};

export const setLanguage = (index, payload) => {
  return {
    type: actionTypes.SET_LANGUAGE,
    index,
    payload
  };
};

export const moveLanguage = (index, direction) => {
  return {
    type: actionTypes.MOVE_LANGUAGE,
    index,
    direction
  };
};

export const deleteLanguage = (index) => { 
  return {
    type: actionTypes.DELETE_LANGUAGE,
    index
  };
};

export const saveLanguages = () => {
  return {
    type: actionTypes.SAVE_LANGUAGES,
  };
};