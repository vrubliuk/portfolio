import React, { Component } from "react";
import "./App.scss";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import axios from "./axios";
import withPromise from "./helpers/withPromise";
import Spinner from "./components/Spinner/Spinner.jsx";
import Home from "./containers/Home/Home.jsx";
import Login from "./containers/Login/Login.jsx";
import Admin from "./containers/Admin/Admin.jsx";
import Up from "./components/buttons/Up/Up.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faSignInAlt,
  faSignOutAlt,
  faAngleUp,
  faAngleLeft,
  faDownload,
  faExternalLinkAlt,
  faTag,
  faUserCircle,
  faTrashAlt,
  faPlus,
  faMinus,
  faCaretUp,
  faCaretDown,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGithub,
  faLinkedin,
  faSignInAlt,
  faSignOutAlt,
  faAngleUp,
  faAngleLeft,
  faDownload,
  faExternalLinkAlt,
  faTag,
  faUserCircle,
  faTrashAlt,
  faPlus,
  faMinus,
  faCaretUp,
  faCaretDown,
  faCog
);

class App extends Component {
  state = {
    isShown: false
  };

  updateToken = () => {
    const token = sessionStorage.portfolioToken;
    if (token) {
      this.props.setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };

  watchServerErrors = () => {
    axios.interceptors.response.use(null, err => {
      const { status } = err.response;
      if (status === 401) {
        this.props.logOut();
      }
      return Promise.reject(err);
    });
  };

  async componentDidMount() {
    this.updateToken();
    this.watchServerErrors();
    try {
      await this.props.getUser();
      this.setState({
        isShown: true
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  render() {
    const { isShown } = this.state;
    const { token } = this.props;
    return (
      <div className="App">
        {isShown ? (
          <>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact render={() => (!token ? <Login /> : <Redirect to="/" />)} />
              <Route path="/admin" render={() => (token ? <Admin /> : <Redirect to="/login" />)} />
              <Redirect to="/" />
            </Switch>
            <Up />
          </>
        ) : (
          <Spinner style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  getUser: () => withPromise(dispatch, actions.getUser),
  setToken: token => dispatch(actions.setToken(token)),
  logOut: () => dispatch(actions.logOut())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
