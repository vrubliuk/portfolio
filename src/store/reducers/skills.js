import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority";

const initialState = {
  skills: []
};

const setSkills = (state, { payload }) => {
  return updateState(state, {
    skills: payload.sort(sortByPriority)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SKILLS:
      return setSkills(state, action);
    default:
      return state;
  }
};

export default reducer;
