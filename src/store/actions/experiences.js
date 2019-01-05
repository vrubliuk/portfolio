import * as actionTypes from "./actionTypes";

export const updateExperiences = (payload) => {
  return {
    type: actionTypes.UPDATE_EXPERIENCES,
    payload
  };
};

export const saveExperiences = () => {
  return {
    type: actionTypes.SAVE_EXPERIENCES,
  };
};
