import * as actionTypes from "../actions/actionTypes";
import updateState from "../utility/updateState";

const initialState = {
  name: "Valentyn",
  surname: "Rubliuk",
  qualification: "Full Stack Developer",
  contacts: {
    city: "Lviv",
    country: "UA",
    phone: "(063) 75 74 922",
    email: "",
    github: "https://github.com/vrubliuk",
    linkedIn: "https://github.com/vrubliuk"
  },
  skills: [
    {
      category: "Front-end",
      technologies: ["React, Redux", "Vue, Vuex"]
    },
    {
      category: "Back-end",
      technologies: ["Node", "MongoDB"]
    },
    {
      category: "Others",
      technologies: ["Photoshop", "Gimp"]
    }
  ],
  experiences: [
    {
      position: "Team Leader of Billing department",
      company: "PLS Logistics Services",
      city: "Lviv",
      startDate: "2014",
      endDate: "2018"
    },
    {
      position: "Team Leader of Billing department",
      company: "PLS Logistics Services",
      city: "Lviv",
      startDate: "2014",
      endDate: "2018"
    }
  ],
  education: [
    {
      speciality: "Management of foreign economic activity",
      institution: 'NTUU "Kyiv Polytechnic Institute"',
      startDate: "2008",
      endDate: "2014"
    }
  ],
  languages: [
    {
      language: "Ukrainian",
      level: "native"
    },
    {
      language: "English",
      level: "professional"
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
