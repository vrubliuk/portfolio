import React, { Component } from "react";
import "./Projects.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import all from "../../../helpers/all"
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

// const Projects = ({ projects, updateProject, moveProject, deleteProject, addProjectTag, updateProjectTag, moveProjectTag, deleteProjectTag, saveProjects }) => {
//   return <div className="Projects">AdminProjects</div>;
// };

class Projects extends Component {
  state = {
    openedProjectIndex: null
  };

  render() {
    const { openedProjectIndex } = this.state;
    const { projects, addProject, updateProject, moveProject, deleteProject, addProjectTag, updateProjectTag, moveProjectTag, deleteProjectTag, saveProjects } = this.props;

    return (
      <div className="Projects">
        {projects.map((project, i) => (
          <div className="project" key={i}>
            <div className="title" onClick={() => this.setState({ openedProjectIndex: openedProjectIndex === i ? null : i })}>
              {project.name ? project.name : "Your project name"}
            </div>
            <div className="description" style={openedProjectIndex === i ? null : { height: 0 }}>
              <TextInput value={project.name} label="Name" 
              changeHandler={value => all(() =>updateProject(i, { name: value }), ()=> saveProjects())} />
              <TextInput value={project.websiteURL} label="Website URL" 
              changeHandler={value => all(() =>updateProject(i, { websiteURL: value }),()=> saveProjects())} />
              <TextInput value={project.repositoryURL} label="Repository URL" 
              changeHandler={value => all(()=>updateProject(i, { repositoryURL: value }),()=> saveProjects())} />
              
            </div>
          </div>
        ))}
        <Button text="Add project" additionalClassName="blue" style={{ width: "200px", height: "40px" }} onClick={() => addProject()} />
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
