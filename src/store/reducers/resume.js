import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import resume from "../../assets/images/Resume.pdf";

const initialState = {
  resume: resume
};

const updateResume = (state, { file }) => {
  return updateState(state, {
    resume: file
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESUME:
      return updateResume(state, action);
    default:
      return state;
  }
};

export default reducer;
