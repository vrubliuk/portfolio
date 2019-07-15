import {combineReducers} from 'redux'
import auth from "./auth";
import general from "./general"
import contacts from "./contacts"
import skills from "./skills"
import experiences from "./experiences"
import education from "./education"
import languages from "./languages"
import projects from "./projects"
import resume from "./resume"
import userInterface from "./userInterface"


export default combineReducers({
  auth,
  general,
  contacts,
  skills,
  experiences,
  education,
  languages,
  projects,
  resume,
  userInterface
})