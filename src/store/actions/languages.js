import * as actionTypes from "./actionTypes";

export const setLanguages = (payload) => {
  return {
    type: actionTypes.SET_LANGUAGES,
    payload
  };
};

export const createLanguage = (name, level) => {
  return {
    type: actionTypes.CREATE_LANGUAGE,
    name,
    level
  };
};

export const updateLanguage = (id, payload) => {
  return {
    type: actionTypes.UPDATE_LANGUAGE,
    id,
    payload
  };
};

export const moveLanguage = (id, direction) => {
  return {
    type: actionTypes.MOVE_LANGUAGE,
    id,
    direction
  };
};

export const deleteLanguage = (id) => { 
  return {
    type: actionTypes.DELETE_LANGUAGE,
    id
  };
};