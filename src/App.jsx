import React from "react";
import "./App.scss";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./containers/Home/Home.jsx";
import Auth from "./containers/Auth/Auth.jsx";
import Admin from "./containers/Admin/Admin.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faMapMarkerAlt, faPhone, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// library.add(faMapMarkerAlt, faPhone, faEnvelope, faCheck, faGithub, faLinkedin);
library.add(faMapMarkerAlt, faPhone, faEnvelope, faGithub, faLinkedin);

const App = ({ token }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/auth"
          exact
          render={() => (!token ? <Auth /> : <Redirect to="/" />)}
        />
        <Route
          path="/admin"
          exact
          render={() => (token ? <Admin /> : <Redirect to="/" />)}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default withRouter(connect(mapStateToProps)(App));
