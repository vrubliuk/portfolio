import React from "react";
import "./Admin.scss";
import { connect } from "react-redux";
import { withRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import Sidebar from "../../HOCs/Sidebar/Sidebar";
import PageTitle from "../../components/PageTitle/PageTitle";
import General from "./General/General.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import Skills from "./Skills/Skills.jsx";
import Experiences from "./Experiences/Experiences.jsx";
import Education from "./Education/Education.jsx";
import Languages from "./Languages/Languages.jsx";
import Projects from "./Projects/Projects.jsx";
import Resume from "./Resume/Resume"
import Button from "../../components/Button/Button";
import SavingIndicator from "../../components/SavingIndicator/SavingIndicator.jsx"
import * as actions from "../../store/actions/index";

const Admin = ({ requestsQuantity, history, location }) => {
  const links = ["general", "contacts", "skills", "experiences", "education", "languages", "projects", "resume"];

  // const handleLogOutButtonClick = () => {
  //   history.replace("/");
  //   logOut();
  // };
  
 
  return (
    <div className="Admin">
    
      <Sidebar>
      
        
        
        <div className="links">
          {links.map(link => (
            <NavLink to={`/admin/${link}`} activeClassName="active" key={link}>
              {link}
            </NavLink>
          ))}
        </div>
      </Sidebar>

      <main>
      <Button
        icon="left"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: "20px", left: "20px", borderRadius: "50%" }}
        onClick={() => history.push("/")}
      />
        
        
        
      <PageTitle title={location.pathname.split('/').pop()} />
      <Switch>
        <Redirect exact from="/admin" to="/admin/general" />
        <Route exact path="/admin/general" component={General} />
        <Route exact path="/admin/contacts" component={Contacts} />
        <Route exact path="/admin/skills" component={Skills} />
        <Route exact path="/admin/experiences" component={Experiences} />
        <Route exact path="/admin/education" component={Education} />
        <Route exact path="/admin/languages" component={Languages} />
        <Route exact path="/admin/projects" component={Projects} />
        <Route exact path="/admin/resume" component={Resume} />
      </Switch>

      </main>

   
      
      {requestsQuantity > 0 && <SavingIndicator style={{position: "fixed", margin: "auto", left: 0, right: 0, bottom: 20}}/> }
    
      
    </div>
  );
};

const mapStateToProps =({userInterface}) => ({
  requestsQuantity: userInterface.requestsQuantity
})

export default withRouter(
  connect(
    mapStateToProps
   
  )(Admin)
);
