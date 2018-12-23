import React from 'react'
import "./Admin.scss"
import {connect} from "react-redux"

import { withRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import Sidebar from '../../HOCs/Sidebar/Sidebar';
import AdminGeneral from "../AdminGeneral/AdminGeneral.jsx"
import AdminSkills from "../AdminSkills/AdminSkills.jsx"
import AdminExperiences from "../AdminExperiences/AdminExperiences.jsx"
import AdminEducation from "../AdminEducation/AdminEducation.jsx"
import AdminLanguages from "../AdminLanguages/AdminLanguages.jsx"
import AdminProjects from "../AdminProjects/AdminProjects.jsx"
import Button from '../../components/Button/Button';
import * as actions from "../../store/actions/index"

const Admin = ({logOut}) => {
  const links = [
    "general",
    "skills",
    "experiences",
    "education",
    "languages",
    "projects"
  ]
  
  
  return <div className="Admin">
    <Sidebar>
      <div className="links">
      {links.map( link => (<NavLink to={`/admin/${link}`} activeClassName="active" key={link}>{link}</NavLink> ) )}
      </div>
  
    </Sidebar>
    
    
    <Switch>
      <Redirect exact from="/admin" to="/admin/general" />
      <Route exact path="/admin/general" component={AdminGeneral}/>
      <Route exact path="/admin/skills" component={AdminSkills}/>
      <Route exact path="/admin/experiences" component={AdminExperiences}/>
      <Route exact path="/admin/education" component={AdminEducation}/>
      <Route exact path="/admin/languages" component={AdminLanguages}/>
      <Route exact path="/admin/projects" component={AdminProjects}/>
        
    </Switch>
    <Button icon="logOut" additionalClassName="blue" style={{ width: "40px", height: "40px", position: 'absolute', top: '20px', right: '20px'}} onClick={() => logOut()}/>
    
  </div>
}


const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(actions.logOut())
  }
}

export default withRouter( connect(null, mapDispatchToProps)(Admin) );