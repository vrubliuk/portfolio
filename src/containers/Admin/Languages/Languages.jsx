import React from "react";
import "./Languages.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import Footer from "../../../HOCs/Footer/Footer";
import Button from "../../../components/Button/Button.jsx"

const Languages = () => {
  return <div className="Languages">AdminLanguages
  
  
  <Footer>
    <Button text="Add Language" additionalClassName="blue" style={{ width: "200px", height: "40px"}} />
  </Footer>
  </div>;
};



const mapStateToProps = ({ profile }) => ({ languages: profile.languages });
const mapDispatchToProps = dispatch => {
  return {
    setEducation: payload => dispatch(actions.setEducation(payload)),
    saveEducation: () => dispatch(actions.saveEducation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);