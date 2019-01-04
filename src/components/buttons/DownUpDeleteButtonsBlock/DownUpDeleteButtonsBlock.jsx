import React from "react"
import "./DownUpDeleteButtonsBlock.scss"
import PropTypes from "prop-types"
import Button from "../../Button/Button.jsx"

const DownUpDeleteButtonsBlock = ({clickDownButtonHandler, clickUpButtonHandler, clickDeleteButtonHandler}) => {
  return <div className="DownUpDeleteButtonsBlock">
    <Button text="Down" additionalClassName="blue" style={{ width: "40px", height: "40px" }} onClick={() => clickDownButtonHandler()} />
    <Button text="Up" additionalClassName="blue" style={{ width: "40px", height: "40px" }} onClick={() => clickUpButtonHandler()} />
    <Button text="Del" additionalClassName="blue" style={{ width: "40px", height: "40px" }} onClick={() => clickDeleteButtonHandler()} />
  </div>
}

DownUpDeleteButtonsBlock.propTypes = {
  clickDownButtonHandler: PropTypes.func.isRequired,
  clickUpButtonHandler: PropTypes.func.isRequired,
  clickDeleteButtonHandler: PropTypes.func.isRequired
}

export default DownUpDeleteButtonsBlock;
