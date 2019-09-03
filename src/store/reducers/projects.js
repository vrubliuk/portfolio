import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority";

const initialState = {
  projects: []
};

const setProjects = (state, { payload }) => {
  return updateState(state, {
    projects: payload.sort(sortByPriority)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return setProjects(state, action);
    default:
      return state;
  }
};

export default reducer;
