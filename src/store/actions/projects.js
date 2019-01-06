import * as actionTypes from "./actionTypes";

export const getProjects = () => {
  return {
    type: actionTypes.GET_PROJECTS,
  };
};

export const addProject = () => {
  return {
    type: actionTypes.ADD_PROJECT,
  };
};

export const updateProject = (projectIndex, payload) => {
  return {
    type: actionTypes.UPDATE_PROJECT,
    projectIndex,
    payload
  };
};

export const moveProject = (projectIndex, direction) => {
  return {
    type: actionTypes.MOVE_PROJECT,
    projectIndex,
    direction
  };
};

export const deleteProject = projectIndex => {
  return {
    type: actionTypes.DELETE_PROJECT,
    projectIndex
  };
};

export const addProjectTag = (projectIndex) => {
  return {
    type: actionTypes.ADD_PROJECT_TAG,
    projectIndex
  };
};

export const updateProjectTag = (projectIndex, tagIndex, value) => {
  return {
    type: actionTypes.UPDATE_PROJECT_TAG,
    projectIndex,
    tagIndex,
    value
  };
};

export const moveProjectTag = (projectIndex, tagIndex, direction) => {
  return {
    type: actionTypes.MOVE_PROJECT_TAG,
    projectIndex,
    tagIndex,
    direction
  };
};

export const deleteProjectTag = (projectIndex, tagIndex) => {
  return {
    type: actionTypes.DELETE_PROJECT_TAG,
    projectIndex,
    tagIndex
  };
};

export const saveProjects = () => {
  return {
    type: actionTypes.SAVE_PROJECTS
  };
};