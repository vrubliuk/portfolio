import * as actionTypes from "./actionTypes";

export const setContacts = payload => {
  return {
    type: actionTypes.SET_CONTACTS,
    payload
  };
};

export const updateContacts = payload => {
  return {
    type: actionTypes.UPDATE_CONTACTS,
    payload
  };
};
