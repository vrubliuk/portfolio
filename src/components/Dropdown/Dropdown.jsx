import React, { useState } from "react";
import classes from "./Dropdown.module.scss";
import PropTypes from "prop-types";

const Dropdown = ({ className, style, options, value, changeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${classes.dropdown} ${className}`} style={style}>
      <div className={classes.valueWrapper} onClick={() => setIsOpen(!isOpen)}>
        <div className={classes.value}>{value} </div>
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options.map( (option, i) => (
            <div className={`${classes.option} ${option.value === value ? classes.optionActive : ""}`} onClick={() => changeHandler(option.value)} key={i}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  value: PropTypes.string,
  changeHandler: PropTypes.func
};

Dropdown.defaultProps = {
  className: "",
  style: {},
  options: [],
  value: "",
  changeHandler: () => {}
};

export default Dropdown;
