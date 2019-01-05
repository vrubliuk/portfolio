import * as actionTypes from "./actionTypes";

export const setContacts = (payload) => {
  return {
    type: actionTypes.SET_CONTACTS,
    payload
  };
};

export const saveContacts = () => {
  return {
    type: actionTypes.SAVE_CONTACTS,
  };
};

