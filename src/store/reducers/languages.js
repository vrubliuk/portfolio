import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority";

const initialState = {
  languages: []
};

const setLanguages = (state, { payload }) => {
  return updateState(state, {
    languages: payload.sort(sortByPriority)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGES:
      return setLanguages(state, action);
    default:
      return state;
  }
};

export default reducer;
