import React from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";
import Label from "../Label/Label.jsx"

const TextInput = ({ style, type, value, label, changeHandler, isRequired, pattern }) => {  
  return (
    <div className="TextInput" style={style}>
      {label && <Label style={{marginBottom: 10}} text={`${label}:`}/>}
      <input type={type} value={value} onChange={e => changeHandler(e.target.value)} required={isRequired} pattern={pattern} />
    </div>
  );
};  

TextInput.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func,
  isRequired: PropTypes.bool,
  pattern: PropTypes.string,
};

TextInput.defaultProps = {
  style: {},
  type: "text",
  changeHandler: () => {},
  isRequired: false,
  pattern: null
}

export default TextInput;
