import React from "react";
import classes from "./Spinner.module.scss";
import PropTypes from "prop-types";

const Spinner = ({ style, diameter, thickness, color }) => {
  return (
    <div className={classes.wrapper} style={style}>
      <div
        className={classes.circle}
        style={{
          width: diameter,
          height: diameter,
          borderWidth: thickness,
          borderColor: color
        }}
      />
    </div>
  );
};

Spinner.propTypes = {
  style: PropTypes.object,
  diameter: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.string
};

Spinner.defaultProps = {
  style: {},
  diameter: 100,
  thickness: 5
};

export default Spinner;
