import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  token: false
};

const setToken = (state, action) => {
  return updateState(state, {
    token: action.token
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return setToken(state, action);
    default:
      return state;
  }
};

export default reducer;