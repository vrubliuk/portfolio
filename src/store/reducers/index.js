import {combineReducers} from 'redux'
import auth from "./auth";
import skills from "./skills"
import languages from "./languages"
import projects from "./projects"
import profile from "./profile"

export default combineReducers({
  auth,
  skills,
  languages,
  projects,
  profile
})