import React, { Component } from "react";
import "./AuthForm.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

class AuthForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = (e, type) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleSubmit = e => {
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    this.props.logIn(this.state.email.trim(), this.state.password.trim());
  };

  render() {
    const { errorWasReceived } = this.props;

    return (
      <div className="AuthForm">
        <div className="title">Log in to Portfolio</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="label">Email address</div>
          <input className="input" type="email" required value={this.state.email} onChange={e => this.handleInput(e, "email")} />
          <div className="label">Password</div>
          <input className="input" type="password" required value={this.state.password} onChange={e => this.handleInput(e, "password")} />
          <div className="footer">
            <Button text="Log in" type="submit" additionalClassName="transparent" style={{ height: "40px", padding: "0 16px" }} />
            {errorWasReceived && <div className="error">Incorrect email address or password</div>}
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
