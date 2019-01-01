import React from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";

const TextInput = ({ value, label, changeHandler }) => {
  return (
    <div className="TextInput">
      {label && <div className="label">{label}:</div>}
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
