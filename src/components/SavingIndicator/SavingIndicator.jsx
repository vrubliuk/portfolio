import React from "react";
import classes from "./SavingIndicator.module.scss";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner.jsx";

const SavingIndicator = ({ style }) => {
  return (
    <div className={classes.wrapper} style={style}>
      <Spinner diameter={20} thickness={3} />
      <div className={classes.text}>Saving...</div>
    </div>
  );
};

SavingIndicator.propTypes = {
  style: PropTypes.object
};

SavingIndicator.defaultProps = {
  style: {}
};

export default SavingIndicator;
