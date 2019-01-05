import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"


const initialState = {
  contacts: {
    location: "Lviv, UA",
    phone: "(063) 75 74 922",
    email: "vrubliuk@gmail.com",
    github: "github.com/vrubliuk",
    linkedIn: "github.com/vrubliuk"
  },

};


const setContacts = (state, action) => {
  return updateState(state, {
    contacts: {...state.contacts, ...action.payload}
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
