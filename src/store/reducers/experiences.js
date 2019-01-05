import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"


const initialState = {
  experiences: [
    {
      
      position: "Front-end Developer",
      company: "Redentu",
      city: "Lviv",
      startDate: "2018",
      endDate: "2019"
    },
    {
      
      position: "Team Leader of Billing department",
      company: "PLS Logistics Services",
      city: "Lviv",
      startDate: "2014",
      endDate: "2018"
    }
  ],

};

const updateExperiences = (state, action) => {
  return updateState(state, {
    general: {...state.general, ...action.payload}
  });
};







const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GENERAL: 
    return updateExperiences(state, action);
   
  

   
   
   
    default:
      return state;
  }
};

export default reducer;
