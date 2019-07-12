import React from "react";
import "./Languages.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import DownUpDeleteButtonsBlock from "../../../components/buttons/DownUpDeleteButtonsBlock/DownUpDeleteButtonsBlock";
import Button from "../../../components/Button/Button.jsx";

const Languages = ({ languages, addLanguage, setLanguage, moveLanguage, deleteLanguage, saveLanguages }) => {
  const handleChange = (index, payload) => {
    setLanguage(index, payload);
    saveLanguages();
  };

  const handleMove = (index, indexDifference) => {
    moveLanguage(index, indexDifference);
    saveLanguages();
  };

  const handleDelete = index => {
    deleteLanguage(index);
    saveLanguages();
  };

  return (
    <div className="Languages">
      {languages.map((language, i) => (
        <div className="language" key={i}>
          <TextInput value={language.name} changeHandler={value => handleChange(i, { name: value })} label="Name" />
          <TextInput value={language.level} changeHandler={value => handleChange(i, { level: value })} label="Level" />
          <DownUpDeleteButtonsBlock
            clickDownButtonHandler={i !== languages.length - 1 ? () => handleMove(i, 1) : null}
            clickUpButtonHandler={i !== 0 ? () => handleMove(i, -1) : null}
            clickDeleteButtonHandler={() => handleDelete(i)}
          />
        </div>
      ))}
      <Button text="Add Language" additionalClassName="blue" style={{margin: 20, width: 200, height: 40 }} onClick={() => addLanguage()} />
    </div>
  );
};

const mapStateToProps = ({ languages }) => ({ languages: languages.languages });
const mapDispatchToProps = dispatch => {
  return {
    addLanguage: () => dispatch(actions.addLanguage()),
    setLanguage: (index, payload) => dispatch(actions.setLanguage(index, payload)),
    moveLanguage: (index, indexDifference) => dispatch(actions.moveLanguage(index, indexDifference)),
    deleteLanguage: index => dispatch(actions.deleteLanguage(index)),
    saveLanguages: () => dispatch(actions.saveLanguages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);
