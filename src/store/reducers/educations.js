import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority";

const initialState = {
  educations: []
};

const setEducations = (state, { payload }) => {
  return updateState(state, {
    educations: payload.sort(sortByPriority)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EDUCATIONS:
      return setEducations(state, action);
    default:
      return state;
  }
};

export default reducer;
