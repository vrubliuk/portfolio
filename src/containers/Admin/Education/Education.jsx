import React from "react";
import "./Education.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";

const Education = ({education, setEducation, saveEducation}) => {
  const handleChange = (payload) => {
    setEducation(payload)
    saveEducation()
  }

  return <div className="Education">
   <TextInput value={education.speciality} changeHandler={value => handleChange({ speciality: value })} label="Speciality" />
    <TextInput value={education.institution} changeHandler={value => handleChange({ institution: value })} label="Institution" />
    <TextInput value={education.startDate} changeHandler={value => handleChange({ startDate: value })} label="Start date" />
    <TextInput value={education.endDate} changeHandler={value => handleChange({ endDate: value })} label="End date" />
  
  </div>;
};


const mapStateToProps = ({ profile }) => ({ education: profile.education });
const mapDispatchToProps = dispatch => {
  return {
    setEducation: payload => dispatch(actions.setEducation(payload)),
    saveEducation: () => dispatch(actions.saveEducation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education);
