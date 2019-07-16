import React from "react";
import "./Education.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

const Education = ({ educations, createEducation, updateEducation, moveEducation, deleteEducation }) => {
  return (
    <div className="Education">
      <Button
        icon="plus"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: -60, left: 20, borderRadius: "50%" }}
        onClick={createEducation}
      />
      {educations.map(e => (
        <div className="educationWrapper" key={e._id}>
          <div className="education">
            <TextInput value={e.speciality} label="Position" changeHandler={value => updateEducation(e._id, { speciality: value })} />
            <TextInput value={e.institution} label="Company" changeHandler={value => updateEducation(e._id, { institution: value })} />
            <TextInput value={e.startDate} label="Start Date" changeHandler={value => updateEducation(e._id, { startDate: value })} />
            <TextInput value={e.endDate} label="End Date" changeHandler={value => updateEducation(e._id, { endDate: value })} />
          </div>
          <DownUpDeleteButtonsBlock
            style={{ marginTop: 30 }}
            clickDownButtonHandler={e.priority > 1 ? () => moveEducation(e._id, -1) : null}
            clickUpButtonHandler={e.priority < e.length ? () => moveEducation(e._id, 1) : null}
            clickDeleteButtonHandler={() => deleteEducation(e._id)}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ educations }) => ({ educations: educations.educations });
const mapDispatchToProps = dispatch => ({
  createEducation: () => dispatch(actions.createEducation()),
  updateEducation: (id, payload) => dispatch(actions.updateEducation(id, payload)),
  moveEducation: (id, direction) => dispatch(actions.moveEducation(id, direction)),
  deleteEducation: index => dispatch(actions.deleteEducation(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education);
