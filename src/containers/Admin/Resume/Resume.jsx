import React from "react";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import TextInput from "../../../components/inputs/TextInput/TextInput";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const Resume = ({ resume, updateResume, saveResume, deleteResume }) => {
  return (
    <div className="Resume">
      <FileInput
        fileName={ resume && resume.name || resume }
        label="Resume"
        changeHandler={value => (updateResume(value), saveResume())}
        removeHandler={() => (updateResume(null), deleteResume())}
      />
    </div>
  );
};

const mapStateToProps = ({ resume }) => ({ resume: resume.resume });
const mapDispatchToProps = dispatch => {
  return {
    updateResume: file => dispatch(actions.updateResume(file)),
    saveResume: () => dispatch(actions.saveResume()),
    deleteResume: () => dispatch(actions.deleteResume()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
