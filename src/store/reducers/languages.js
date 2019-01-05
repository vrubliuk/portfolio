import * as actionTypes from "../actions/actionTypes";
import updateState from "../../helpers/updateState"

const initialState = {
    languages: [
    {
      name: "Ukrainian",
      level: "native"
    },
    {
      name: "English",
      level: "professional"
    },
    {
      name: "JavaScript",
      level: "fluent"
    }
  ]
};

const setLanguage = (state, {index, payload}) => {
  const languages = [...state.languages];
  languages[index] = {...languages[index], ...payload}
  return updateState(state, {
    languages
  });
};

const addLanguage = (state) => {
  const languages = [...state.languages];
  languages.push({
    name: "",
    level: ""
  })
  return updateState(state, {
    languages
  });
};

const moveLanguage = (state, {index, indexDifference}) => {
  const languages = [...state.languages];
  const language = languages.splice(index, 1)[0];
  languages.splice(index + indexDifference, 0, language);
  return updateState(state, {
    languages
  });
};

const deleteLanguage = (state, {index}) => {
  return updateState(state, {
    languages: [...state.languages].filter( (language, i) => i !== index)
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_LANGUAGE: 
    return setLanguage(state, action);
    case actionTypes.ADD_LANGUAGE: 
    return addLanguage(state);
    case actionTypes.MOVE_LANGUAGE: 
    return moveLanguage(state, action);
    case actionTypes.DELETE_LANGUAGE: 
    return deleteLanguage(state, action);
   
    default:
      return state;
  }
};

export default reducer;
