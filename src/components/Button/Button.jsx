import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";

const Button = ({ icon, text, additionalClassName, style, onClick }) => {
  return (
    <button type="button" className={`Button ${additionalClassName}`} style={style} onClick={onClick}>
      <span className="icon">
        <FontAwesomeIcon icon={icons[icon]} />
      </span>
      <span className="text">{text}</span>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  additionalClassName: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default Button;
