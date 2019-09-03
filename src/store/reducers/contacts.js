import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";

const initialState = {
  contacts: {
    location: "",
    phone: "",
    email: "",
    github: "",
    linkedIn: ""
  }
};

const setContacts = (state, { payload }) => {
  return updateState(state, {
    contacts: { ...state.contacts, ...payload }
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTACTS:
      return setContacts(state, action);
    default:
      return state;
  }
};

export default reducer;
