import {combineReducers} from 'redux'
import auth from "./auth";
import languages from "./languages"
import projects from "./projects"
import profile from "./profile"

export default combineReducers({
  auth,
  languages,
  projects,
  profile
})