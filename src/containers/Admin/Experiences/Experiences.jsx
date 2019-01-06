import React from "react";
import "./Experiences.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

const Experiences = ({ experiences, addExperience, updateExperience, moveExperience, deleteExperience, saveExperiences }) => {
  return (
    <div className="Experiences">
      {experiences.map((experience, i) => (
        <div className="experience" key={i}>
          <TextInput value={experience.position} label="Position" changeHandler={value => (updateExperience(i, { position: value }), saveExperiences())} />
          <TextInput value={experience.company} label="Company" changeHandler={value => (updateExperience(i, { company: value }), saveExperiences())} />
          <TextInput value={experience.city} label="City" changeHandler={value => (updateExperience(i, { city: value }), saveExperiences())} />
          <TextInput value={experience.startDate} label="Start Date" changeHandler={value => (updateExperience(i, { startDate: value }), saveExperiences())} />
          <TextInput value={experience.endDate} label="End Date" changeHandler={value => (updateExperience(i, { endDate: value }), saveExperiences())} />
          <DownUpDeleteButtonsBlock
            clickDownButtonHandler={i !== experiences.length - 1 ? () => (moveExperience(i, "down"), saveExperiences()) : null}
            clickUpButtonHandler={i !== 0 ? () => (moveExperience(i, "up"), saveExperiences()) : null}
            clickDeleteButtonHandler={() => (deleteExperience(i), saveExperiences())}
          />
        </div>
      ))}
      <Button text="Add Experience" additionalClassName="blue" style={{ width: "200px", height: "40px" }} onClick={() => addExperience()} />
    </div>
  );
};

const mapStateToProps = ({ experiences }) => ({ experiences: experiences.experiences });
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
)(Experiences);
