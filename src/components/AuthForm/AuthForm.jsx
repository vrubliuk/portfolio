import React, { Component } from "react";
import "./AuthForm.scss";
import PropTypes from "prop-types";
import TextInput from "../inputs/TextInput/TextInput.jsx"
import Button from "../Button/Button";

class AuthForm extends Component {
  state = {
    login: "",
    password: ""
  };

  handleInput = (input, value) => {
    this.setState({
      [input]: value
    });
  };

  handleSubmit = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    this.props.logIn(this.state.login.trim(), this.state.password.trim());
  };

  render() {
    const { errorWasReceived } = this.props;

    return (
      <div className="AuthForm">
        <div className="title">Log in to Portfolio</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="label">Login</div>
          <input className="input" type="text" required value={this.state.login} onChange={e => this.handleInput(e, "login")} />
          
          <TextInput value={this.state.login} label="Login" changeHandler={login => this.setState({login})} />
          
          <div className="label">Password</div>
          <input className="input" type="password" required value={this.state.password} onChange={e => this.handleInput(e, "password")} />
          <div className="footer">
            <Button text="Log in" type="submit" additionalClassName="transparent" style={{ height: "40px", padding: "0 16px" }} />
            {errorWasReceived && <div className="error">Incorrect login or password</div>}
          </div>
        </form>
      </div>
    );
  }
}

AuthForm.propTypes = {
  errorWasReceived: PropTypes.bool,
  logIn: PropTypes.func
};

export default AuthForm;
