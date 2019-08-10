import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState";
import sortByPriority from "../../helpers/sortByPriority"

const initialState = {
  projects: [
    {
      _id: 1,
      priority: 1,
      name: "Calendar",
      screenshot: "",
      summary: "Some text",
      tags: ["jQuery"],
      websiteUrl: "https://vrubliuk.github.io/painting-cart/",
      repositoryUrl: "https://github.com/vrubliuk/painting-cart/"
    },
    {
      _id: 2,
      priority: 2,
      name: "Requirements",
      screenshot:"",
      summary: "Some text",
      tags: ["React", "jQuery", "Vue"],
      websiteUrl: "https://vrubliuk.github.io/painting-cart/",
      repositoryUrl: "https://github.com/vrubliuk/painting-cart/"
    },
    {
      _id: 3,
      priority: 3,
      name: "Statistics",
      screenshot: "",
      summary: "Some text",
      tags: ["React", "jQuery", "Vue"],
      websiteUrl: "https://vrubliuk.github.io/painting-cart/",
      repositoryUrl: "https://github.com/vrubliuk/painting-cart/"
    }
  ]
};

const setProjects = (state, { payload }) => {
  return updateState(state, {
    projects: payload.sort(sortByPriority)
  });
};

// const addProject = state => {
//   const projects = [...state.projects];
//   projects.push({
//     name: "",
//     screenshotURL: "",
//     summary: "",
//     tags: [],
//     websiteURL: "",
//     repositoryURL: ""
//   });
//   return updateState(state, {
//     projects
//   });
// };

// const updateProject = (state, { projectIndex, payload }) => {
//   const projects = [...state.projects];
//   projects[projectIndex] = { ...projects[projectIndex], ...payload };
//   return updateState(state, {
//     projects
//   });
// };

// const moveProject = (state, { projectIndex, direction }) => {
//   const projects = [...state.projects];
//   const project = projects.splice(projectIndex, 1)[0];
//   const indexDifference = direction === "up" ? -1 : direction === "down" ? 1 : 0;
//   projects.splice(projectIndex + indexDifference, 0, project);
//   return updateState(state, {
//     projects
//   });
// };

// const deleteProject = (state, { projectIndex }) => {
//   return updateState(state, {
//     projects: [...state.projects].filter((project, i) => i !== projectIndex)
//   });
// };

// const addProjectTag = (state, { projectIndex }) => {
//   const projects = [...state.projects];
//   projects[projectIndex].tags.push("");
//   return updateState(state, {
//     projects
//   });
// };

// const updateProjectTag = (state, { projectIndex, tagIndex, value }) => {
//   const projects = JSON.parse(JSON.stringify(state.projects));
//   projects[projectIndex].tags[tagIndex] = value;
//   return updateState(state, {
//     projects
//   });
// };

// const moveProjectTag = (state, { projectIndex, tagIndex, direction }) => {
//   const projects = JSON.parse(JSON.stringify(state.projects));
//   const tags = projects[projectIndex].tags;
//   const tag = tags.splice(tagIndex, 1)[0];
//   const indexDifference = direction === "up" ? -1 : direction === "down" ? 1 : 0;
//   tags.splice(tagIndex + indexDifference, 0, tag);
//   return updateState(state, {
//     projects
//   });
// };

// const deleteProjectTag = (state, { projectIndex, tagIndex }) => {
//   const projects = JSON.parse(JSON.stringify(state.projects));
//   projects[projectIndex].tags = projects[projectIndex].tags.filter((tag, i) => i !== tagIndex);
//   return updateState(state, {
//     projects
//   });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return setProjects(state, action);
    // case actionTypes.ADD_PROJECT:
    //   return addProject(state);
    // case actionTypes.UPDATE_PROJECT:
    //   return updateProject(state, action);
    // case actionTypes.MOVE_PROJECT:
    //   return moveProject(state, action);
    // case actionTypes.DELETE_PROJECT:
    //   return deleteProject(state, action);
    // case actionTypes.ADD_PROJECT_TAG:
    //   return addProjectTag(state, action);
    // case actionTypes.UPDATE_PROJECT_TAG:
    //   return updateProjectTag(state, action);
    // case actionTypes.MOVE_PROJECT_TAG:
    //   return moveProjectTag(state, action);
    // case actionTypes.DELETE_PROJECT_TAG:
    //   return deleteProjectTag(state, action);
    default:
      return state;
  }
};

export default reducer;
