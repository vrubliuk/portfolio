import React from "react";
import "./Languages.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/buttons/Button/Button.jsx";

const Languages = ({ languages, createLanguage, updateLanguage, moveLanguage, deleteLanguage }) => {
  return (
    <div className="Languages">
      <Button
        icon="plus"
        additionalClassName="blue"
        style={{ width: "40px", height: "40px", position: "absolute", top: -60, right: 20, borderRadius: "50%" }}
        onClick={createLanguage}
      />
      {languages.map(language => (
        <div className="languageWrapper" key={language._id}>
          <div className="language">
            <TextInput value={language.name} changeHandler={value => updateLanguage(language._id, { name: value })} label="Name" />
            <TextInput value={language.level} changeHandler={value => updateLanguage(language._id, { level: value })} label="Level" />
          </div>
          <DownUpDeleteButtonsBlock
            clickDownButtonHandler={language.priority > 1 ? () => moveLanguage(language._id, -1) : null}
            clickUpButtonHandler={language.priority < languages.length ? () => moveLanguage(language._id, 1) : null}
            clickDeleteButtonHandler={() => deleteLanguage(language._id)}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ languages }) => ({ languages: languages.languages });
const mapDispatchToProps = dispatch => {
  return {
    createLanguage: () => dispatch(actions.createLanguage()),
    updateLanguage: (id, payload) => dispatch(actions.updateLanguage(id, payload)),
    moveLanguage: (id, direction) => dispatch(actions.moveLanguage(id, direction)),
    deleteLanguage: index => dispatch(actions.deleteLanguage(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);
