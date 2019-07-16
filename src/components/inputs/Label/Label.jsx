import React from "react"
import classes from "./Label.module.scss"
import PropTypes from "prop-types"

const Label = ({style, text}) => {
  return <div className={classes.wrapper} style={style}>{text}</div>
}

Label.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string
}

Label.defaultProps = {
  style: {},
  text: ""
}

export default Label;