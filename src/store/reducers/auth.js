import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"

const initialState = {
  token: 1
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