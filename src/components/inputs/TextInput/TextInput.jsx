import React from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";
import Label from "../Label/Label.jsx"

const TextInput = ({ value, label, changeHandler }) => {
  return (
    <div className="TextInput">
      {label && <Label style={{marginBottom: 10}} text={`${label}:`}/>}
      <input value={value} onChange={e => changeHandler(e.target.value)} type="text" />
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func.isRequired
};

export default TextInput;
