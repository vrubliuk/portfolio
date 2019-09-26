import React, { useState } from "react";
import classes from "./Dropdown.module.scss";
import PropTypes from "prop-types";
import icons from "../../assets/icons/index";
import all from "../../helpers/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import onClickOutside from "react-onclickoutside";

const Dropdown = ({ className, style, options, value, changeHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  Dropdown.handleClickOutside = () => setIsOpen(false);

  return (
    <div className={`${classes.dropdown} ${className}`} style={style}>
      <div className={classes.valueWrapper} onClick={() => setIsOpen(!isOpen)}>
        <div className={classes.value}>{value} </div>
        <div className={classes.iconWrapper}>
          <FontAwesomeIcon icon={icons[isOpen ? "caretUp" : "caretDown"]} />
        </div>
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options.map((option, i) => (
            <div
              className={`${classes.option} ${option.value === value ? classes.optionActive : ""}`}
              onClick={() => all(() => changeHandler(option.value), () => setIsOpen(false))}
              key={i}
            >
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
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

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
};

export default onClickOutside(Dropdown, clickOutsideConfig);
