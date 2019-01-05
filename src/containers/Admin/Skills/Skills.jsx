import React from "react";
import "./Skills.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx"
import { saveSkills } from "../../../store/actions/skills";



const Skills = ({categories, addSkillsCategory, updateSkillsCategoryName, moveSkillsCategory, deleteSkillsCategory, addSkillsCategoryTechnology, updateSkillsCategoryTechnology }) => {
  const handleCategoryNameChange = (categoryIndex, value) => {
    updateSkillsCategoryName(categoryIndex, value)
    saveSkills()
  }

  const handleCategoryTechnologyChange = (categoryIndex, technologyIndex, value) => {
    updateSkillsCategoryTechnology(categoryIndex, technologyIndex, value)
    saveSkills()
  }

  // const handleMove = (index, indexDifference) => {
  //   moveLanguage(index, indexDifference)
  //   saveLanguages()
  // }

  // const handleDelete = (index) => {
  //   deleteLanguage(index)
  //   saveLanguages()
  // }


  return <div className="Skills">
  {
    categories.map((category, i) => ( <div className="category" key={i}>
    <TextInput value={category.name} changeHandler={value => handleCategoryNameChange(i, value)} label="Category" />
    <div>
      {category.technologies.map((technology, k) => <TextInput value={technology} changeHandler={value => handleCategoryTechnologyChange(i, k, value)} key={k} /> ) }
      <Button text="Add Technology" additionalClassName="blue" style={{ width: "200px", height: "40px"}} onClick={() => addSkillsCategoryTechnology(i)}/>
    </div>

    <DownUpDeleteButtonsBlock 
      clickDownButtonHandler={i !== categories.length - 1 ? () => moveSkillsCategory(i, "down") : null}
      clickUpButtonHandler={i !== 0 ? () => moveSkillsCategory(i, "up") : null }
      clickDeleteButtonHandler={()=> deleteSkillsCategory(i)}
    />
    
  
  
    </div> ) )
  }


  
  
    <Button text="Add Category" additionalClassName="blue" style={{ width: "200px", height: "40px"}} onClick={() => addSkillsCategory()}/>
  
  </div>;
};



const mapStateToProps = ({ skills }) => ({ categories: skills.categories });
const mapDispatchToProps = dispatch => {
  return {
    addSkillsCategory: () => dispatch(actions.addSkillsCategory()),
    updateSkillsCategoryName: (categoryIndex, value) => dispatch(actions.updateSkillsCategoryName(categoryIndex, value)),
    moveSkillsCategory: (categoryIndex, direction) => dispatch(actions.moveSkillsCategory(categoryIndex, direction)),
    deleteSkillsCategory: (categoryIndex) => dispatch(actions.deleteSkillsCategory(categoryIndex)),
    addSkillsCategoryTechnology: (index) => dispatch(actions.addSkillsCategoryTechnology(index)),
    updateSkillsCategoryTechnology: (categoryIndex, technologyIndex, value) => dispatch(actions.updateSkillsCategoryTechnology(categoryIndex, technologyIndex, value))
    // moveLanguage: (index, indexDifference) => dispatch(actions.moveLanguage(index, indexDifference)),
    // deleteLanguage: (index) => dispatch(actions.deleteLanguage(index)  ),
    // saveLanguages: () => dispatch(actions.saveLanguages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);