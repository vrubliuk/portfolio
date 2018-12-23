import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";

const Button = ({ type, icon, text, additionalClassName, style, onClick }) => {
  return (
    <button type={type ? type : "button"} className={`${styles.Button} ${styles[additionalClassName]}`} style={style} onClick={onClick}>
      {icon && (
        <span className={icon && text && styles["icon-small"]}>
          <FontAwesomeIcon icon={icons[icon]} />
        </span>
      )}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  additionalClassName: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

export default Button;
