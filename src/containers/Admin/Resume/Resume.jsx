import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import FileInput from "../../../components/inputs/FileInput/FileInput";

const Resume = ({ resume, updateResume, putUserFile }) => {
  const resumeFileName = resume.split(/\\|\//).pop()
  return (
    <div className="Resume">
      <FileInput
        fileName={resumeFileName}
        label="Resume"
        changeHandler={value => putUserFile("resume", value)}
        removeHandler={() => updateResume("")}
      />
    </div>
  );
};

const mapStateToProps = ({ resume }) => ({ resume: resume.resume });
const mapDispatchToProps = dispatch => {
  return {
    updateResume: payload => dispatch(actions.updateResume(payload)),
    putUserFile: (field, payload) => dispatch(actions.putUserFile(field, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
