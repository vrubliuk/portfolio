import React from "react";
import "./Projects.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

const Projects = ({projects}) => {
  return <div className="Projects">AdminProjects</div>;
};

const mapStateToProps = ({ projects }) => ({ projects: projects.projects });
const mapDispatchToProps = dispatch => {
  return {
    addExperience: () => dispatch(actions.addExperience()),
    updateExperience: (experienceIndex, payload) => dispatch(actions.updateExperience(experienceIndex, payload)),
    moveExperience: (experienceIndex, direction) => dispatch(actions.moveExperience(experienceIndex, direction)),
    deleteExperience: experienceIndex => dispatch(actions.deleteExperience(experienceIndex)),
    saveExperiences: () => dispatch(actions.saveExperiences())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);