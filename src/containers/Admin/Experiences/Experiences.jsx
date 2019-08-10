import React from "react";
import "./Experiences.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

const Experiences = ({ experiences, createExperience, updateExperience, moveExperience, deleteExperience }) => {
  return (
    <div className="Experiences">
      <Button
        icon="plus"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: -60, left: 20, borderRadius: "50%" }}
        onClick={createExperience}
      />
      {experiences.map(e => (
        <div className="experienceWrapper" key={e._id}>
          <div className="experience">
            <TextInput value={e.position} label="Position" changeHandler={value => updateExperience(e._id, { position: value })} />
            <TextInput value={e.company} label="Company" changeHandler={value => updateExperience(e._id, { company: value })} />
            <TextInput value={e.city} label="City" changeHandler={value => updateExperience(e._id, { city: value })} />
            <TextInput value={e.startDate} label="Start Date" changeHandler={value => updateExperience(e._id, { startDate: value })} />
            <TextInput value={e.endDate} label="End Date" changeHandler={value => updateExperience(e._id, { endDate: value })} />
          </div>
          <DownUpDeleteButtonsBlock
            clickDownButtonHandler={e.priority > 1 ? () => moveExperience(e._id, -1) : null}
            clickUpButtonHandler={e.priority < experiences.length ? () => moveExperience(e._id, 1) : null}
            clickDeleteButtonHandler={() => deleteExperience(e._id)}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ experiences }) => ({ experiences: experiences.experiences });
const mapDispatchToProps = dispatch => ({
  createExperience: () => dispatch(actions.createExperience()),
  updateExperience: (id, payload) => dispatch(actions.updateExperience(id, payload)),
  moveExperience: (id, direction) => dispatch(actions.moveExperience(id, direction)),
  deleteExperience: index => dispatch(actions.deleteExperience(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experiences);
