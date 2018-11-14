import React from "react";
import "./App.scss";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./containers/Home/Home.jsx";
import Auth from "./containers/Auth/Auth.jsx";
import Admin from "./containers/Admin/Admin.jsx";

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
