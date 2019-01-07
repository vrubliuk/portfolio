import React from "react"
import classes from "./Textarea.module.scss"
import PropTypes from "prop-types"

const Textarea = ({label, placeholder, value, changeHandler}) => {
  return <div className={classes.Textarea}>
   {label && <div className={classes.label}>{label}:</div>}
  <textarea value={value} onChange={(e) => changeHandler(e.target.value)} placeholder={placeholder} ></textarea>
  </div>
}

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changeHandler: PropTypes.func.isRequired
}

export default Textarea