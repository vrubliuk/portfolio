import React, { Component } from "react";
import "./Projects.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

// const Projects = ({ projects, updateProject, moveProject, deleteProject, addProjectTag, updateProjectTag, moveProjectTag, deleteProjectTag, saveProjects }) => {
//   return <div className="Projects">AdminProjects</div>;
// };

class Projects extends Component {
  state = {
    openedProjectIndex: 0
  };

  render() {
    const { projects, updateProject, moveProject, deleteProject, addProjectTag, updateProjectTag, moveProjectTag, deleteProjectTag, saveProjects } = this.props;

    return (
      <div className="Projects">
        {projects.map((project, i) => (
          <div className="project">
  
            <div className="title">{project.name ? project.name : "Your project name"}</div>
            <div className="description">
            <TextInput value={project.name} label="Name" changeHandler={value => (updateProject(i, { name: value }), saveProjects())} />
            
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => ({ projects: projects.projects });
const mapDispatchToProps = dispatch => {
  return {
    addProject: () => dispatch(actions.addProject()),
    updateProject: (projectIndex, payload) => dispatch(actions.updateProject(projectIndex, payload)),
    moveProject: (projectIndex, direction) => dispatch(actions.moveExperience(projectIndex, direction)),
    deleteProject: projectIndex => dispatch(actions.deleteProject(projectIndex)),
    addProjectTag: projectIndex => dispatch(actions.addProjectTag(projectIndex)),
    updateProjectTag: (projectIndex, tagIndex, value) => dispatch(actions.updateProjectTag(projectIndex, tagIndex, value)),
    moveProjectTag: (projectIndex, tagIndex, direction) => dispatch(actions.moveProjectTag(projectIndex, tagIndex, direction)),
    deleteProjectTag: (projectIndex, tagIndex) => dispatch(actions.deleteProjectTag(projectIndex, tagIndex)),
    saveProjects: () => dispatch(actions.saveProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
