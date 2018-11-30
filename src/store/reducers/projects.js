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
      codeURL: "https://github.com/vrubliuk/painting-cart/",
    },
    {
      name: "Calendar",
      screenshotURL: "",
      summary: "Some text",
      tags: ["React", "jQuery", "Vue", "Vue", "Vue"],
      websiteURL: "https://vrubliuk.github.io/painting-cart/",
      codeURL: "https://github.com/vrubliuk/painting-cart/",
    },
    {
      name: "Calendar",
      screenshotURL: "",
      summary: "Some text",
      tags: ["React", "jQuery", "Vue"],
      websiteURL: "https://vrubliuk.github.io/painting-cart/",
      codeURL: "https://github.com/vrubliuk/painting-cart/",
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