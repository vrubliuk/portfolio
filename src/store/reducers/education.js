import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"

const initialState = {
  education: 
    {
      speciality: "Management of foreign economic activity",
      institution: 'NTUU "Kyiv Polytechnic Institute"',
      startDate: "2008",
      endDate: "2014"
    }
};


const setEducation = (state, action) => {
  return updateState(state, {
    education: {...state.education, ...action.payload}
  });
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EDUCATION: 
    return setEducation(state, action);
    default:
      return state;
  }
};

export default reducer;
