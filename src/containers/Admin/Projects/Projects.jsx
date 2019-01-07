import React, { Component } from "react";
import "./Projects.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import all from "../../../helpers/all";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";
import ImageInput from "../../../components/inputs/ImageInput/ImageInput";
import Textarea from "../../../components/inputs/Textarea/Textarea";

// const Projects = ({ projects, updateProject, moveProject, deleteProject, addProjectTag, updateProjectTag, moveProjectTag, deleteProjectTag, saveProjects }) => {
//   return <div className="Projects">AdminProjects</div>;
// };

class Projects extends Component {
  state = {
    openedProjectIndex: null
  };

  render() {
    const { openedProjectIndex } = this.state;
    const {
      projects,
      addProject,
      updateProject,
      moveProject,
      deleteProject,
      addProjectTag,
      updateProjectTag,
      moveProjectTag,
      deleteProjectTag,
      saveProjects,
      saveProjectScreenshot,
      deleteProjectScreenshot
    } = this.props;

    return (
      <div className="Projects">
        {projects.map((project, i) => (
          <div className="project" key={i}>
            <div className="title">
              <div className="name" onClick={() => this.setState({ openedProjectIndex: openedProjectIndex === i ? null : i })}>
                {project.name ? project.name : "Your project name"}
              </div>
              <DownUpDeleteButtonsBlock
                clickDownButtonHandler={i !== projects.length - 1 ? () => all(() => moveProject(i, "down"), () => saveProjects()) : null}
                clickUpButtonHandler={i !== 0 ? () => all(() => moveProject(i, "up"), () => saveProjects()) : null}
                clickDeleteButtonHandler={() => all(() => deleteProject(i), () => saveProjects())}
              />
            </div>
            <div className="description" style={openedProjectIndex === i ? null : { height: 0 }}>
              <TextInput value={project.name} label="Name" changeHandler={value => all(() => updateProject(i, { name: value }), () => saveProjects())} />
              <ImageInput
                value={project.screenshotURL}
                label="Screenshot"
                changeHandler={(value, file) => all(() => updateProject(i, { screenshotURL: value }), () => saveProjectScreenshot(i, file))}
                removeHandler={() => all(() => updateProject(i, { screenshotURL: null }), () => deleteProjectScreenshot(i))}
              />
              <Textarea
                label="Summary"
                placeholder="Few words about the project..."
                value={project.summary}
                changeHandler={value => all(() => updateProject(i, { summary: value }), () => saveProjects())}
              />

              {project.tags.map((tag, k) => (
                <div className="tag" key={k}>
                  <TextInput value={tag} changeHandler={value => all(() => updateProjectTag(i, k, value), () => saveProjects())} />
                  <DownUpDeleteButtonsBlock
                    clickDownButtonHandler={k !== project.tags.length - 1 ? () => all(() => moveProjectTag(i, k, "down"), () => saveProjects()) : null}
                    clickUpButtonHandler={k !== 0 ? () => all(() => moveProjectTag(i, k, "up"), () => saveProjects()) : null}
                    clickDeleteButtonHandler={() => all(() => deleteProjectTag(i, k), () => saveProjects())}
                  />
                </div>
              ))}
              <Button text="Add tag" additionalClassName="blue" style={{ width: "200px", height: "40px" }} onClick={() => addProjectTag(i)} />

              <TextInput
                value={project.websiteURL}
                label="Website URL"
                changeHandler={value => all(() => updateProject(i, { websiteURL: value }), () => saveProjects())}
              />
              <TextInput
                value={project.repositoryURL}
                label="Repository URL"
                changeHandler={value => all(() => updateProject(i, { repositoryURL: value }), () => saveProjects())}
              />
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
    moveProject: (projectIndex, direction) => dispatch(actions.moveProject(projectIndex, direction)),
    deleteProject: projectIndex => dispatch(actions.deleteProject(projectIndex)),
    addProjectTag: projectIndex => dispatch(actions.addProjectTag(projectIndex)),
    updateProjectTag: (projectIndex, tagIndex, value) => dispatch(actions.updateProjectTag(projectIndex, tagIndex, value)),
    moveProjectTag: (projectIndex, tagIndex, direction) => dispatch(actions.moveProjectTag(projectIndex, tagIndex, direction)),
    deleteProjectTag: (projectIndex, tagIndex) => dispatch(actions.deleteProjectTag(projectIndex, tagIndex)),
    saveProjects: () => dispatch(actions.saveProjects()),
    saveProjectScreenshot: (projectId, file) => dispatch(actions.saveProjectScreenshot(projectId, file)),
    deleteProjectScreenshot: projectId => dispatch(actions.deleteProjectScreenshot(projectId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
