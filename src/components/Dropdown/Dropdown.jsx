import React from "react";
import classes from "./Dropdown.module.scss"
import PropTypes from "prop-types"

const Dropdown = ({className, style, options, value, changeHandler }) => {
  return <div className={`${classes.dropdown} ${className}`}>Dropdown</div>
}

Dropdown.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  changeHandler: PropTypes.func
}

Dropdown.defaultProps = {
  className: "",
  style: {},
  options: [],
  value: "",
  changeHandler: () => {}
}

export default Dropdown;
