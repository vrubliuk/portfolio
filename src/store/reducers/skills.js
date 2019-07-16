import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"

const initialState = {
  skills: [
    {
      _id: 1,
      title: "Front-end",
      technologies: ["React, Redux", "Vue, Vuex"],
      priority: 1, 
    },
    {
      _id: 2,
      title: "Back-end",
      technologies: ["Node", "MongoDB"],
      priority: 2, 
    },   
    {
      _id: 3,
      title: "Others",
      technologies: ["Photoshop", "Gimp"],
      priority: 3, 
    }
  ],
};

// const addSkillsCategory = (state) => {
//   const categories = [...state.categories];
//   categories.push({
//     name: "",
//     technologies: []
//   })
//   return updateState(state, {
//     categories
//   });
// };

// const updateSkillsCategoryName = (state, {categoryIndex, value}) => {
//   const categories = [...state.categories];
//   categories[categoryIndex].name = value;
//   return updateState(state, {
//     categories
//   });
// }

// const moveSkillsCategory = (state, {categoryIndex, direction}) => {
//   const categories = [...state.categories];
//   const category = categories.splice(categoryIndex, 1)[0];
//   const indexDifference  = direction === "up" ? -1 : direction === "down" ? 1 : 0;
//   categories.splice(categoryIndex + indexDifference, 0, category);
//   return updateState(state, {
//     categories
//   });
// };

// const deleteSkillsCategory = (state, {categoryIndex}) => {
//   return updateState(state, {
//     categories: [...state.categories].filter( (category, i) => i !== categoryIndex)
//   });
// };

// const addSkillsCategoryTechnology = (state, {categoryIndex}) => {
//   const categories = [...state.categories];
//   categories[categoryIndex].technologies.push("") 
//   return updateState(state, {
//     categories
//   });
// };

// const updateSkillsCategoryTechnology = (state, {categoryIndex, technologyIndex, value}) => {
//   const categories = JSON.parse(JSON.stringify(state.categories));
//   categories[categoryIndex].technologies[technologyIndex] = value;
//   return updateState(state, {
//     categories
//   });
// }

// const moveSkillsCategoryTechnology = (state, {categoryIndex, technologyIndex, direction}) => {
//   const categories = JSON.parse(JSON.stringify(state.categories));
//   const technologies = categories[categoryIndex].technologies;
//   const technology = technologies.splice(technologyIndex, 1)[0];
//   const indexDifference = direction === "up" ? -1 : direction === "down" ? 1 : 0;
//   technologies.splice(technologyIndex + indexDifference, 0, technology);
//   return updateState(state, {
//     categories
//   });
// };

// const deleteSkillsCategoryTechnology = (state, {categoryIndex, technologyIndex}) => {
//   const categories = JSON.parse(JSON.stringify(state.categories));
//   categories[categoryIndex].technologies = categories[categoryIndex].technologies.filter((technology, i) => i !== technologyIndex)
//   return updateState(state, {
//     categories
//   });
// };


const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.ADD_SKILLS_CATEGORY: 
    //  return addSkillsCategory(state);
    //  case actionTypes.UPDATE_SKILLS_CATEGORY_NAME: 
    //   return updateSkillsCategoryName(state, action);
    //   case actionTypes.MOVE_SKILLS_CATEGORY: 
    //   return moveSkillsCategory(state, action);
    //   case actionTypes.DELETE_SKILLS_CATEGORY: 
    //   return deleteSkillsCategory(state, action);

    // case actionTypes.ADD_SKILLS_CATEGORY_TECHNOLOGY: 
    //   return addSkillsCategoryTechnology(state, action);
    //   case actionTypes.UPDATE_SKILLS_CATEGORY_TECHNOLOGY: 
    //   return updateSkillsCategoryTechnology(state, action);




    // case actionTypes.MOVE_SKILLS_CATEGORY_TECHNOLOGY: 
    //  return moveSkillsCategoryTechnology(state, action);
    // case actionTypes.DELETE_SKILLS_CATEGORY_TECHNOLOGY: 
    // return deleteSkillsCategoryTechnology(state, action);

   
   
   
    
    default:
      return state;
  }
};

export default reducer;
