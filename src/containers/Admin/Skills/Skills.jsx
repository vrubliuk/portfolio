import React from "react";
import "./Skills.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";
import Label from "../../../components/inputs/Label/Label.jsx";

const Skills = ({
  skills,
  addSkillsCategory,
  updateSkillsCategoryName,
  moveSkillsCategory,
  deleteSkillsCategory,
  addSkillsCategoryTechnology,
  updateSkillsCategoryTechnology,
  moveSkillsCategoryTechnology,
  deleteSkillsCategoryTechnology,
  saveSkills,

  moveSkill,
  deleteSkill
}) => {
  // const handleCategoryNameChange = (categoryIndex, value) => {
  //   updateSkillsCategoryName(categoryIndex, value);
  //   saveSkills();
  // };

  // const handleCategoryMove = (categoryIndex, direction) => {
  //   moveSkillsCategory(categoryIndex, direction);
  //   saveSkills();
  // };

  // const handleCategoryDelete = categoryIndex => {
  //   deleteSkillsCategory(categoryIndex);
  //   saveSkills();
  // };

  // const handleCategoryTechnologyChange = (categoryIndex, technologyIndex, value) => {
  //   updateSkillsCategoryTechnology(categoryIndex, technologyIndex, value);
  //   saveSkills();
  // };

  // const handleCategoryTechnologyMove = (categoryIndex, technologyIndex, direction) => {
  //   moveSkillsCategoryTechnology(categoryIndex, technologyIndex, direction);
  //   saveSkills();
  // };

  // const handleCategoryTechnologyDelete = (categoryIndex, technologyIndex) => {
  //   deleteSkillsCategoryTechnology(categoryIndex, technologyIndex);
  //   saveSkills();
  // };

  return (
    <div className="Skills">
      <Button
        icon="plus"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: -60, left: 20, borderRadius: "50%" }}
        onClick={addSkillsCategory}
      />
      {skills.map(skill => (
        <div className="skill" key={skill._id}>
          <TextInput label="Category" value={skill.title} changeHandler={value => value} />
          <div>
            <Label style={{ margin: "20px 0 -10px 20px" }} text="Technologies:" />
            {skill.technologies.map((technology, i) => (
              <TextInput value={technology} changeHandler={value => value} key={i} />
            ))}
            <Button
              icon="plus"
              additionalClassName="blue"
              style={{ margin: "20px 125px 20px 125px", width: "40px", height: "40px", borderRadius: "50%" }}
              onClick={addSkillsCategory}
            />
          </div>
          <DownUpDeleteButtonsBlock
            style={{ marginTop: 30 }}
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
    // addSkillsCategory: () => dispatch(actions.addSkillsCategory()),
    // updateSkillsCategoryName: (categoryIndex, value) => dispatch(actions.updateSkillsCategoryName(categoryIndex, value)),
    // moveSkillsCategory: (categoryIndex, direction) => dispatch(actions.moveSkillsCategory(categoryIndex, direction)),
    // deleteSkillsCategory: categoryIndex => dispatch(actions.deleteSkillsCategory(categoryIndex)),
    // addSkillsCategoryTechnology: index => dispatch(actions.addSkillsCategoryTechnology(index)),
    // updateSkillsCategoryTechnology: (categoryIndex, technologyIndex, value) =>
    //   dispatch(actions.updateSkillsCategoryTechnology(categoryIndex, technologyIndex, value)),
    // moveSkillsCategoryTechnology: (categoryIndex, technologyIndex, direction) =>
    //   dispatch(actions.moveSkillsCategoryTechnology(categoryIndex, technologyIndex, direction)),
    // deleteSkillsCategoryTechnology: (categoryIndex, technologyIndex) => dispatch(actions.deleteSkillsCategoryTechnology(categoryIndex, technologyIndex)),
    // saveSkills: () => dispatch(actions.saveSkills())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
