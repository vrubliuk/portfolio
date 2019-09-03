import React from "react";
import classes from "./Projects.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Label from "../../../components/inputs/Label/Label.jsx";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/buttons/Button/Button.jsx";
import FileInput from "../../../components/inputs/FileInput/FileInput";
import Textarea from "../../../components/inputs/Textarea/Textarea";

const Projects = ({ projects, createProject, updateProject, updateProjectScreenshot, moveProject, deleteProject, deleteProjectScreenshot }) => {
  return (
    <div className={classes.wrapper}>
      <Button
        icon="plus"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: -60, right: 20, borderRadius: "50%" }}
        onClick={createProject}
      />
      {projects.map(project => (
        <div className={classes.projectWrapper} key={project._id}>
          <div className={classes.project}>
            <TextInput value={project.name} label="Name" changeHandler={value => updateProject(project._id, { name: value })} />
            <FileInput
              fileName={project.screenshot.split(/\\|\//).pop()}
              label="Screenshot"
              changeHandler={file => updateProjectScreenshot(project._id, file)}
              removeHandler={() => deleteProjectScreenshot(project._id)}
            />
            <TextInput value={project.websiteUrl} label="Website URL" changeHandler={value => updateProject(project._id, { websiteUrl: value })} />
            <TextInput value={project.repositoryUrl} label="Repository URL" changeHandler={value => updateProject(project._id, { repositoryUrl: value })} />
            <Textarea label="Summary" value={project.summary} changeHandler={value => updateProject(project._id, { summary: value })} />
            <div>
              <Label style={{ margin: "20px 0 -10px 20px" }} text="Tags:" />
              {project.tags.map((tag, i) => (
                <TextInput
                  value={tag}
                  changeHandler={value => updateProject(project._id, { tags: project.tags.map((t, k) => (k === i ? value : t)) })}
                  key={i}
                />
              ))}
              <div className={classes.buttons}>
                {project.tags.length > 1 && (
                  <Button
                    icon="minus"
                    additionalClassName="blue"
                    style={{ marginRight: 20, width: "40px", height: "40px", borderRadius: "50%" }}
                    onClick={() => updateProject(project._id, { tags: project.tags.filter((t, i) => i !== project.tags.length - 1) })}
                  />
                )}
                <Button
                  icon="plus"
                  additionalClassName="blue"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  onClick={() => updateProject(project._id, { tags: [...project.tags, ""] })}
                />
              </div>
            </div>
          </div>
          <DownUpDeleteButtonsBlock
            clickDownButtonHandler={project.priority > 1 ? () => moveProject(project._id, -1) : null}
            clickUpButtonHandler={project.priority < projects.length ? () => moveProject(project._id, 1) : null}
            clickDeleteButtonHandler={() => deleteProject(project._id)}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ projects }) => ({ projects: projects.projects });
const mapDispatchToProps = dispatch => {
  return {
    createProject: () => dispatch(actions.createProject()),
    updateProject: (id, payload) => dispatch(actions.updateProject(id, payload)),
    updateProjectScreenshot: (id, file) => dispatch(actions.updateProjectScreenshot(id, file)),
    moveProject: (id, direction) => dispatch(actions.moveProject(id, direction)),
    deleteProject: index => dispatch(actions.deleteProject(index)),
    deleteProjectScreenshot: index => dispatch(actions.deleteProjectScreenshot(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
