// import * as actionTypes from "../actions/actionTypes";
// import updateState from "../utility/updateState";

const initialState = {
  projects: [
    {
      name: "Calendar",
      screenshotURL: "",
      summary: "Some text",
      tags: ["jQuery"],
      websiteURL: "https://vrubliuk.github.io/painting-cart/",
      repositoryURL: "https://github.com/vrubliuk/painting-cart/",
      priority: 1,
    },
    {
      name: "Calendar",
      screenshotURL: "",
      summary: "Some text",
      tags: ["React", "jQuery", "Vue", "Vue", "Vue"],
      websiteURL: "https://vrubliuk.github.io/painting-cart/",
      repositoryURL: "https://github.com/vrubliuk/painting-cart/",
      priority: 2,
    },
    {
      name: "Calendar",
      screenshotURL: "",
      summary: "Some text",
      tags: ["React", "jQuery", "Vue"],
      websiteURL: "https://vrubliuk.github.io/painting-cart/",
      repositoryURL: "https://github.com/vrubliuk/painting-cart/",
      priority: 0
    }
  ]
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;