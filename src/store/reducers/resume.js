import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";

const initialState = {
  resume: null
};

const setResume = (state, { payload }) => {
  return updateState(state, {
    resume: payload
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RESUME:
      return setResume(state, action);
    default:
      return state;
  }
};

export default reducer;
