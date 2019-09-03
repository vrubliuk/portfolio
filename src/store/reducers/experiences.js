import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority";

const initialState = {
  experiences: []
};

const setExperiences = (state, { payload }) => {
  return updateState(state, {
    experiences: payload.sort(sortByPriority)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EXPERIENCES:
      return setExperiences(state, action);
    default:
      return state;
  }
};

export default reducer;
