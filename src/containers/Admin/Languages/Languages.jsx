import React, { useState } from "react";
import "./Languages.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import all from "../../../helpers/all";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

const Languages = ({ languages, createLanguage, updateLanguage, moveLanguage, deleteLanguage }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div className="Languages">
      <div className="language">
        <TextInput value={name} changeHandler={value => setName(value)} label="Name" />
        <TextInput value={level} changeHandler={value => setLevel(value)} label="Level" />
        <Button
          text="Add Language"
          additionalClassName="blue"
          style={{ margin: 20, width: 140, height: 40 }}
          onClick={() => all(() => createLanguage(name, level), () => setName(""), () => setLevel(""))}
        />
      </div>
      {languages.map((language, i) => (
        <div className="language" key={i}>
          <TextInput value={language.name} changeHandler={value => updateLanguage(language._id, { name: value })} label="Name" />
          <TextInput value={language.level} changeHandler={value => updateLanguage(language._id, { level: value })} label="Level" />
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
    createLanguage: (name, level) => dispatch(actions.createLanguage(name, level)),
    updateLanguage: (id, payload) => dispatch(actions.updateLanguage(id, payload)),
    moveLanguage: (id, direction) => dispatch(actions.moveLanguage(id, direction)),
    deleteLanguage: index => dispatch(actions.deleteLanguage(index)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);
