import * as actionTypes from "./actionTypes";

export const adjustRequestsQuantity = value => {
  return {
    type: actionTypes.ADJUST_REQUESTS_QUANTITY,
    value
  };
};
