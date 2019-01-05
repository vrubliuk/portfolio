import React from "react";
import "./Skills.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx"



const Skills = ({categories, addSkillsCategory, updateSkillsCategoryName, moveSkillsCategory, deleteSkillsCategory, addSkillsCategoryTechnology, updateSkillsCategoryTechnology, moveSkillsCategoryTechnology, deleteSkillsCategoryTechnology, saveSkills }) => {

  const handleCategoryNameChange = (categoryIndex, value) => {
    updateSkillsCategoryName(categoryIndex, value)
    saveSkills()
  }

  const handleCategoryMove = (categoryIndex, direction) => {
    moveSkillsCategory(categoryIndex, direction)
    saveSkills()
  }

  const handleCategoryDelete = (categoryIndex) => {
    deleteSkillsCategory(categoryIndex)
    saveSkills()
  }

  const handleCategoryTechnologyChange = (categoryIndex, technologyIndex, value) => {
    updateSkillsCategoryTechnology(categoryIndex, technologyIndex, value)
    saveSkills()
  }

  const handleCategoryTechnologyMove = (categoryIndex, technologyIndex, direction) => {
    moveSkillsCategoryTechnology(categoryIndex, technologyIndex, direction)
    saveSkills()
  }

  const handleCategoryTechnologyDelete = (categoryIndex, technologyIndex) => {
    deleteSkillsCategoryTechnology(categoryIndex, technologyIndex)
    saveSkills()
  }


  return <div className="Skills">
  {
    categories.map((category, i) => ( <div className="category" key={i}>
    <TextInput value={category.name} changeHandler={value => handleCategoryNameChange(i, value)} label="Category" />
    <div>
      {category.technologies.map((technology, k) => ( <div className="technology" key={k}> 
        <TextInput value={technology} changeHandler={value => handleCategoryTechnologyChange(i, k, value)}  /> 
        <DownUpDeleteButtonsBlock 
          clickDownButtonHandler={k !== category.technologies.length - 1 ? () => handleCategoryTechnologyMove(i, k, "down") : null}
          clickUpButtonHandler={k !== 0 ? () => handleCategoryTechnologyMove(i, k, "up") : null }
          clickDeleteButtonHandler={()=> handleCategoryTechnologyDelete(i, k)}
        />
        </div> )) }
      <Button text="Add Technology" additionalClassName="blue" style={{ width: "200px", height: "40px"}} onClick={() => addSkillsCategoryTechnology(i)}/>
    </div>

    <DownUpDeleteButtonsBlock 
      clickDownButtonHandler={i !== categories.length - 1 ? () => handleCategoryMove(i, "down") : null}
      clickUpButtonHandler={i !== 0 ? () => handleCategoryMove(i, "up") : null }
      clickDeleteButtonHandler={()=> handleCategoryDelete(i)}
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
    updateSkillsCategoryTechnology: (categoryIndex, technologyIndex, value) => dispatch(actions.updateSkillsCategoryTechnology(categoryIndex, technologyIndex, value)),
    moveSkillsCategoryTechnology: (categoryIndex, technologyIndex, direction) => dispatch(actions.moveSkillsCategoryTechnology(categoryIndex, technologyIndex, direction)),
    deleteSkillsCategoryTechnology: (categoryIndex, technologyIndex) => dispatch(actions.deleteSkillsCategoryTechnology(categoryIndex, technologyIndex)),
    saveSkills: () => dispatch(actions.saveSkills())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);