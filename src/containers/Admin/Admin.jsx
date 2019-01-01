import React from "react";
import "./Admin.scss";
import { connect } from "react-redux";

import { withRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import Sidebar from "../../HOCs/Sidebar/Sidebar";
import General from "./General/General.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import Skills from "./Skills/Skills.jsx";
import Experiences from "./Experiences/Experiences.jsx";
import Education from "./Education/Education.jsx";
import Languages from "./Languages/Languages.jsx";
import Projects from "./Projects/Projects.jsx";
import Button from "../../components/Button/Button";
import * as actions from "../../store/actions/index";

const Admin = ({ logOut, history }) => {
  const links = ["general", "contacts", "skills", "experiences", "education", "languages", "projects"];

  const handleLogOutButtonClick = () => {
    history.replace("/");
    logOut();
  };

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

      <Switch>
        <Redirect exact from="/admin" to="/admin/general" />
        <Route exact path="/admin/general" component={General} />
        <Route exact path="/admin/contacts" component={Contacts} />
        <Route exact path="/admin/skills" component={Skills} />
        <Route exact path="/admin/experiences" component={Experiences} />
        <Route exact path="/admin/education" component={Education} />
        <Route exact path="/admin/languages" component={Languages} />
        <Route exact path="/admin/projects" component={Projects} />
      </Switch>
      <Button
        icon="logOut"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: "20px", right: "20px" }}
        onClick={() => handleLogOutButtonClick()}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(actions.logOut())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Admin)
);
