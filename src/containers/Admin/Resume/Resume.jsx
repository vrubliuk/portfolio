import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import all from "../../../helpers/all";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const Resume = ({ resume, updateResume, saveResume, deleteResume }) => {
  return (
    <div className="Resume">
      <FileInput
        fileName={(resume && resume.name) || resume}
        label="Resume"
        changeHandler={(value) => all(() => updateResume(value), () => saveResume())}
        removeHandler={() => all(() => updateResume(null), () => deleteResume())}
      />
    </div>
  );
};

const mapStateToProps = ({ resume }) => ({ resume: resume.resume });
const mapDispatchToProps = dispatch => {
  return {
    updateResume: file => dispatch(actions.updateResume(file)),
    saveResume: () => dispatch(actions.saveResume()),
    deleteResume: () => dispatch(actions.deleteResume())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
