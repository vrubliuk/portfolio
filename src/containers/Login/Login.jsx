import React, { useState, useEffect } from "react";
import classes from "./Login.module.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextInput from "../../components/inputs/TextInput/TextInput.jsx";
import Button from "../../components/Button/Button";
import * as actions from "../../store/actions/index";
import withPromise from "../../helpers/withPromise";

const Login = ({ history, logIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async e => {
    setErrorMessage("");
    clearTimeout(Login.timeout);
    if (!e.target.checkValidity()) return;
    e.preventDefault();
    setIsDisabled(true);
    try {
      await logIn(login, password);
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setIsDisabled(false);
      Login.timeout = setTimeout(() => {
        setErrorMessage("");
      }, 1500);
    }
  };
    
  useEffect(() => {
    return () => {
      clearTimeout(Login.timeout);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <Button
        icon="left"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: "20px", left: "20px", borderRadius: "50%" }}
        onClick={() => history.push("/")}
      />
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.title}>Log in to Portfolio</div>
        <TextInput style={{ width: "100%" }} value={login} label="Login" changeHandler={value => setLogin(value)} />
        <TextInput style={{ width: "100%" }} type="password" value={password} label="Password" changeHandler={value => setPassword(value)} />
        <div className={classes.footer}>
          <Button text="Submit" type="submit" additionalClassName="blue" style={{ height: "40px", padding: "0 16px" }} isDisabled={isDisabled} />
          {errorMessage && <div className={classes.error}>{errorMessage}</div>}
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logIn: (login, password) => withPromise(dispatch, actions.logIn, login, password)
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
