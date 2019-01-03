import React from "react";
import "./General.scss";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import TextInput from "../../../components/inputs/TextInput/TextInput";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const General = ({ general, setGeneral }) => {
  return (
    <div className="General">
    
      <TextInput value={general.name} changeHandler={value => setGeneral({ name: value })} label="Name" />
      <TextInput value={general.surname} changeHandler={value => setGeneral({ surname: value })} label="Surname" />
      <TextInput value={general.qualification} changeHandler={value => setGeneral({ qualification: value })} label="Qualification" />
      <FileInput
        value={general.avatar}
        label="Avatar"
        changeHandler={value => setGeneral({ avatar: value })}
        removeHandler={() => setGeneral({ avatar: null })}
      />
    </div>
  );
};

const mapStateToProps = ({ profile }) => ({ general: profile.general });
const mapDispatchToProps = dispatch => {
  return {
    setGeneral: payload => dispatch(actions.setGeneral(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
