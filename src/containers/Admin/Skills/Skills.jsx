import React from "react";
import "./Skills.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";
import Label from "../../../components/inputs/Label/Label.jsx";

const Skills = ({ skills, createSkill, updateSkill, moveSkill, deleteSkill }) => {
  return (
    <div className="Skills">
      <Button
        icon="plus"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: -60, left: 20, borderRadius: "50%" }}
        onClick={createSkill}
      />
      {skills.map((skill, i) => (
        <div className="skill" key={i}>
          <div className="form">
          <TextInput label="Category" value={skill.title} changeHandler={value => updateSkill(skill._id, { title: value })} />
          <div>
            <Label style={{ margin: "20px 0 -10px 20px" }} text="Technologies:" />
            {skill.technologies.map((technology, i) => (
              <TextInput
                value={technology}
                changeHandler={value => updateSkill(skill._id, { technologies: skill.technologies.map((t, k) => (k === i ? value : t)) })}
                key={i}
              />
            ))}
            <div className="buttons">
              {!!skill.technologies.length && (
                <Button
                  icon="minus"
                  additionalClassName="blue"
                  style={{ marginRight: 20, width: "40px", height: "40px", borderRadius: "50%" }}
                  onClick={() => updateSkill(skill._id, { technologies: skill.technologies.filter((t, i) => i !== skill.technologies.length - 1) })}
                />
              )}
              <Button
                icon="plus"
                additionalClassName="blue"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                onClick={() => updateSkill(skill._id, { technologies: [...skill.technologies, ""] })}
              />
            </div>
          </div>
          </div>
          <DownUpDeleteButtonsBlock
            clickDownButtonHandler={skill.priority > 1 ? () => moveSkill(skill._id, -1) : null}
            clickUpButtonHandler={skill.priority < skill.length ? () => moveSkill(skill._id, 1) : null}
            clickDeleteButtonHandler={() => deleteSkill(skill._id)}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ skills }) => ({ skills: skills.skills });
const mapDispatchToProps = dispatch => {
  return {
    createSkill: () => dispatch(actions.createSkill()),
    updateSkill: (id, payload) => dispatch(actions.updateSkill(id, payload)),
    moveSkill: (id, direction) => dispatch(actions.moveSkill(id, direction)),
    deleteSkill: index => dispatch(actions.deleteSkill(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
