import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";

const initialState = {
  requestsQuantity: 0
};

const adjustRequestsQuantity = (state, action) => {
  return updateState(state, {
    requestsQuantity: state.requestsQuantity + action.value
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADJUST_REQUESTS_QUANTITY:
      return adjustRequestsQuantity(state, action);
    default:
      return state;
  }
};

export default reducer;
