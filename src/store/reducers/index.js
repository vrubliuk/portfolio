import {combineReducers} from 'redux'
import auth from "./auth";
import skills from "./skills"
import education from "./education"
import languages from "./languages"
import projects from "./projects"
import profile from "./profile"

export default combineReducers({
  auth,
  skills,
  education,
  languages,
  projects,
  profile
})