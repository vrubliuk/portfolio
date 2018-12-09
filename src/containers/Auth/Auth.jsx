import React from 'react'
import "./Auth.scss"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import AuthForm from '../../components/AuthForm/AuthForm';

import Button from '../../components/Button/Button';


const Auth = ({history}) => {
  return <div className="Auth">
    <Button icon="left" additionalClassName="blue" style={{ width: "40px", height: "40px", position: 'absolute', top: '20px', left: '20px'}} onClick={() => history.push('/')}/>
    <AuthForm errorWasReceived/>
  </div>
}

export default withRouter(connect()(Auth));