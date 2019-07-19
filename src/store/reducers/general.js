import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"

const initialState = {
  general: {
    _id: "",
    name: "Valentyn",
    surname: "Rubliuk",
    qualification: "Full Stack Developer",
    avatar: ""
  },

  
 


};

const setGeneral = (state, {payload}) => {
  return updateState(state, {
    general: {...state.general, ...payload}
  });
};






const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GENERAL: 
    return setGeneral(state, action);
   
  

   
   
   
    
    default:
      return state;
  }
};

export default reducer;
