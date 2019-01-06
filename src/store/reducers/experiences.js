import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";

const initialState = {
  experiences: [
    {
      position: "Front-end Developer",
      company: "Redentu",
      city: "Lviv",
      startDate: "2018",
      endDate: "2019"
    },
    {
      position: "Team Leader of Billing department",
      company: "PLS Logistics Services",
      city: "Lviv",
      startDate: "2014",
      endDate: "2018"
    }
  ]
};

const addExperience = state => {
  const experiences = [...state.experiences];
  experiences.push({
    position: "",
    company: "",
    city: "",
    startDate: "",
    endDate: ""
  });
  return updateState(state, {
    experiences
  });
};

const updateExperiences = (state, { experienceIndex, payload }) => {
  const experiences = [...state.experiences];
  experiences[experienceIndex] = { ...experiences[experienceIndex], ...payload };
  return updateState(state, {
    experiences
  });
};

const moveExperience = (state, { experienceIndex, direction }) => {
  const experiences = [...state.experiences];
  const experience = experiences.splice(experienceIndex, 1)[0];
  const indexDifference = direction === "up" ? -1 : direction === "down" ? 1 : 0;
  experiences.splice(experienceIndex + indexDifference, 0, experience);
  return updateState(state, {
    experiences
  });
};

const deleteExperience = (state, { experienceIndex }) => {
  return updateState(state, {
    experiences: [...state.experiences].filter((experience, i) => i !== experienceIndex)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXPERIENCE:
      return addExperience(state);
    case actionTypes.UPDATE_EXPERIENCE:
      return updateExperiences(state, action);
    case actionTypes.MOVE_EXPERIENCE:
      return moveExperience(state, action);
    case actionTypes.DELETE_EXPERIENCE:
      return deleteExperience(state, action);
    default:
      return state;
  }
};

export default reducer;
