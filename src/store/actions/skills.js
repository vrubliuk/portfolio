import * as actionTypes from "./actionTypes";

export const addSkillsCategory = () => {
  return {
    type: actionTypes.ADD_SKILLS_CATEGORY,
  };
};

export const updateSkillsCategoryName = (categoryIndex, value) => {
  return {
    type: actionTypes.UPDATE_SKILLS_CATEGORY_NAME,
    categoryIndex,
    value
  };
};

export const moveSkillsCategory = (categoryIndex, direction) => {
  return {
    type: actionTypes.MOVE_SKILLS_CATEGORY,
    categoryIndex,
    direction
  };
};

export const deleteSkillsCategory = (categoryIndex) => {
  return {
    type: actionTypes.DELETE_SKILLS_CATEGORY,
    categoryIndex,
  };
};

export const addSkillsCategoryTechnology = (categoryIndex) => {
  return {
    type: actionTypes.ADD_SKILLS_CATEGORY_TECHNOLOGY,
    categoryIndex
  };
};

export const updateSkillsCategoryTechnology = (categoryIndex, technologyIndex, value) => {
  return {
    type: actionTypes.UPDATE_SKILLS_CATEGORY_TECHNOLOGY,
    categoryIndex,
    technologyIndex,
    value
  };
};

export const saveSkills = () => {
  return {
    type: actionTypes.SAVE_SKILLS,
  };
};