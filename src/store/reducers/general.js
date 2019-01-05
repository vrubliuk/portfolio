import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"
import avatar from "../../assets/images/avatar.jpg"

const initialState = {
  general: {
    name: "Valentyn",
    surname: "Rubliuk",
    qualification: "Full Stack Developer",
    avatar: avatar
  },

  
 


};

const setGeneral = (state, action) => {
  return updateState(state, {
    general: {...state.general, ...action.payload}
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
