import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"

const initialState = {
  categories: [
    {
      name: "Front-end",
      technologies: ["React, Redux", "Vue, Vuex"]
    },
    {
      name: "Back-end",
      technologies: ["Node", "MongoDB"]
    },   
    {
      name: "Others",
      technologies: ["Photoshop", "Gimp"]
    }
  ],
};

const addSkillsCategory = (state) => {
  const categories = [...state.categories];
  categories.push({
    name: "",
    technologies: []
  })
  return updateState(state, {
    categories
  });
};

const updateSkillsCategoryName = (state, {categoryIndex, value}) => {
  const categories = [...state.categories];
  categories[categoryIndex].name = value;
  return updateState(state, {
    categories
  });
}

const moveSkillsCategory = (state, {categoryIndex, direction}) => {
  const categories = [...state.categories];
  const category = categories.splice(categoryIndex, 1)[0];
  const indexDifference  = direction === "up" ? -1 : direction === "down" ? 1 : 0;
  categories.splice(categoryIndex + indexDifference, 0, category);
  return updateState(state, {
    categories
  });
};

const deleteSkillsCategory = (state, {categoryIndex}) => {
  return updateState(state, {
    categories: [...state.categories].filter( (category, i) => i !== categoryIndex)
  });
};

const addSkillsCategoryTechnology = (state, {categoryIndex}) => {
  const categories = [...state.categories];
  categories[categoryIndex].technologies.push("") 
  return updateState(state, {
    categories
  });
};

const updateSkillsCategoryTechnology = (state, {categoryIndex, technologyIndex, value}) => {
  const categories = JSON.parse(JSON.stringify(state.categories));
  categories[categoryIndex].technologies[technologyIndex] = value;
  return updateState(state, {
    categories
  });
}

// const addLanguage = (state) => {
//   const languages = [...state.languages];
//   languages.push({
//     name: "",
//     level: ""
//   })
//   return updateState(state, {
//     languages
//   });
// };

// const moveLanguage = (state, {index, indexDifference}) => {
//   const languages = [...state.languages];
//   const language = languages.splice(index, 1)[0];
//   languages.splice(index + indexDifference, 0, language);
//   return updateState(state, {
//     languages
//   });
// };

// const deleteLanguage = (state, {index}) => {
//   return updateState(state, {
//     languages: [...state.languages].filter( (language, i) => i !== index)
//   });
// };




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SKILLS_CATEGORY: 
     return addSkillsCategory(state);
     case actionTypes.UPDATE_SKILLS_CATEGORY_NAME: 
      return updateSkillsCategoryName(state, action);

      case actionTypes.MOVE_SKILLS_CATEGORY: 
      return moveSkillsCategory(state, action);

      case actionTypes.DELETE_SKILLS_CATEGORY: 
      return deleteSkillsCategory(state, action);



    case actionTypes.ADD_SKILLS_CATEGORY_TECHNOLOGY: 
      return addSkillsCategoryTechnology(state, action);
      case actionTypes.UPDATE_SKILLS_CATEGORY_TECHNOLOGY: 
      return updateSkillsCategoryTechnology(state, action);
    // case actionTypes.MOVE_LANGUAGE: 
    // return moveLanguage(state, action);
    // case actionTypes.DELETE_LANGUAGE: 
    // return deleteLanguage(state, action);

   
   
   
    
    default:
      return state;
  }
};

export default reducer;
