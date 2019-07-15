import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority"

const initialState = {
  experiences: [
    {
      position: "Front-end Developer",
      company: "Redentu",
      city: "Lviv",
      startDate: "2018",
      endDate: "2019",
      priority: 1
    },
    {
      position: "Team Leader of Billing department",
      company: "PLS Logistics Services",
      city: "Lviv",
      startDate: "2014",
      endDate: "2018",
      priority: 2
    }
  ]
};

const setExperiences = (state, { payload }) => {
  return updateState(state, {
    experiences: payload.sort(sortByPriority)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EXPERIENCES:
      return setExperiences(state);
    default:
      return state;
  }
};

export default reducer;
