import * as actionTypes from "./actionTypes";

export const setProjects = payload => {
  return {
    type: actionTypes.SET_PROJECTS,
    payload
  };
};

export const createProject = () => {
  return {
    type: actionTypes.CREATE_PROJECT
  };
};

export const updateProject = (id, payload) => {
  return {
    type: actionTypes.UPDATE_PROJECT,
    id,
    payload
  };
};

export const updateProjectScreenshot = (id, file) => {
  return {
    type: actionTypes.UPDATE_PROJECT_SCREENSHOT,
    id,
    file
  };
};

export const moveProject = (id, direction) => {
  return {
    type: actionTypes.MOVE_PROJECT,
    id,
    direction
  };
};

export const deleteProject = id => {
  return {
    type: actionTypes.DELETE_PROJECT,
    id
  };
};

export const deleteProjectScreenshot = id => {
  return {
    type: actionTypes.DELETE_PROJECT_SCREENSHOT,
    id
  };
};
