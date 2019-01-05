import React from "react";
import "./General.scss";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import TextInput from "../../../components/inputs/TextInput/TextInput";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const General = ({ general, setGeneral, saveGeneral }) => {
  const handleChange = (payload) => {
    setGeneral(payload)
    saveGeneral()
  }

  return (
    <div className="General">
    
      <TextInput value={general.name} changeHandler={value => handleChange({ name: value })} label="Name" />
      <TextInput value={general.surname} changeHandler={value => handleChange({ surname: value })} label="Surname" />
      <TextInput value={general.qualification} changeHandler={value => handleChange({ qualification: value })} label="Qualification" />
      <FileInput
        value={general.avatar}
        label="Avatar"
        changeHandler={value => handleChange({ avatar: value })}
        removeHandler={() => handleChange({ avatar: null })}
      />
    </div>
  );
};

const mapStateToProps = ({ general }) => ({ general: general.general });
const mapDispatchToProps = dispatch => {
  return {
    setGeneral: payload => dispatch(actions.setGeneral(payload)),
    saveGeneral: () => dispatch(actions.saveGeneral())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
