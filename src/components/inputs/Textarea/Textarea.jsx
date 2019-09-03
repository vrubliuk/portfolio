import React from "react";
import classes from "./Textarea.module.scss";
import PropTypes from "prop-types";
import Label from "../Label/Label.jsx";

const Textarea = ({ label, placeholder, value, changeHandler }) => {
  return (
    <div className={classes.Textarea}>
      {label && <Label style={{ marginBottom: 10 }} text={`${label}:`} />}
      <textarea value={value} onChange={e => changeHandler(e.target.value)} placeholder={placeholder}></textarea>
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changeHandler: PropTypes.func.isRequired
};

export default Textarea;
