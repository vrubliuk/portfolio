import * as actionTypes from "./actionTypes";

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

export const moveLanguage = (index, indexDifference) => { // перейменувати на зміщення
  return {
    type: actionTypes.MOVE_LANGUAGE,
    index,
    indexDifference
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