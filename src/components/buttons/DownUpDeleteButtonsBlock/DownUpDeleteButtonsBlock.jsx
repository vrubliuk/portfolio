import React from "react"
import "./DownUpDeleteButtonsBlock.scss"
import PropTypes from "prop-types"
import Button from "../../Button/Button.jsx"

const DownUpDeleteButtonsBlock = ({style, clickDownButtonHandler, clickUpButtonHandler, clickDeleteButtonHandler}) => {
  
  return <div className="DownUpDeleteButtonsBlock" style={style}>
   {clickDownButtonHandler && <Button text="Down" additionalClassName="blue" style={{marginRight: 20, width: 60, height: 40 }} onClick={() => clickDownButtonHandler()} /> }
   { clickUpButtonHandler && <Button text="Up" additionalClassName="blue" style={{marginRight: 20, width: 60, height: 40 }} onClick={() => clickUpButtonHandler()} /> }
   {clickDeleteButtonHandler && <Button text="Del" additionalClassName="blue" style={{width: 60, height: 40 }} onClick={() => clickDeleteButtonHandler()} />}
  </div>
}

DownUpDeleteButtonsBlock.propTypes = {
  style: PropTypes.object,
  clickDownButtonHandler: PropTypes.func,
  clickUpButtonHandler: PropTypes.func,
  clickDeleteButtonHandler: PropTypes.func
}

DownUpDeleteButtonsBlock.defaultProps = {
  style: {}
}

export default DownUpDeleteButtonsBlock;
