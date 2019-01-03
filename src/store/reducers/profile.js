import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"
import avatar from "../../assets/images/avatar.jpg"

const initialState = {
  general: {
    name: "Valentyn",
    surname: "Rubliuk",
    qualification: "Full Stack Developer",
    avatar: avatar
  },
  contacts: {
    location: "Lviv, UA",
    phone: "(063) 75 74 922",
    email: "vrubliuk@gmail.com",
    github: "github.com/vrubliuk",
    linkedIn: "github.com/vrubliuk"
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
  ],
  education: 
    {
      speciality: "Management of foreign economic activity",
      institution: 'NTUU "Kyiv Polytechnic Institute"',
      startDate: "2008",
      endDate: "2014"
    }
  ,
  languages: [
    {
     
      name: "Ukrainian",
      level: "native"
    },
    {
     
      name: "English",
      level: "professional"
    }
  ]
};

const setGeneral = (state, action) => {
  return updateState(state, {
    general: {...state.general, ...action.payload}
  });
};


const setContacts = (state, action) => {
  return updateState(state, {
    contacts: {...state.contacts, ...action.payload}
  });
};

const setEducation = (state, action) => {
  return updateState(state, {
    education: {...state.education, ...action.payload}
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GENERAL: 
    return setGeneral(state, action);
    case actionTypes.SET_CONTACTS: 
    return setContacts(state, action);
    case actionTypes.SET_EDUCATION: 
    return setEducation(state, action);
    
    default:
      return state;
  }
};

export default reducer;
