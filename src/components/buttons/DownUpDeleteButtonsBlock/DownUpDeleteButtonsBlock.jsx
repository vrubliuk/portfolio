import React from "react";
import "./DownUpDeleteButtonsBlock.scss";
import PropTypes from "prop-types";
import Button from "../../Button/Button.jsx";

const DownUpDeleteButtonsBlock = ({ style, clickDownButtonHandler, clickUpButtonHandler, clickDeleteButtonHandler }) => {
  return (
    <div className="DownUpDeleteButtonsBlock" style={style}>
      {clickDownButtonHandler && (
        <Button icon="caretDown" additionalClassName="grey" style={{ marginRight: 10, width: 40, height: 40, borderRadius: "50%" }} onClick={() => clickDownButtonHandler()} />
      )}
      {clickUpButtonHandler && (
        <Button icon="caretUp" additionalClassName="grey" style={{ marginRight: 10, width: 40, height: 40, borderRadius: "50%" }} onClick={() => clickUpButtonHandler()} />
      )}
      {clickDeleteButtonHandler && (
        <Button icon="trash" additionalClassName="red" style={{ width: 40, height: 40, borderRadius: "50%" }} onClick={() => clickDeleteButtonHandler()} />
      )}
    </div>
  );
};

DownUpDeleteButtonsBlock.propTypes = {
  style: PropTypes.object,
  clickDownButtonHandler: PropTypes.func,
  clickUpButtonHandler: PropTypes.func,
  clickDeleteButtonHandler: PropTypes.func
};

DownUpDeleteButtonsBlock.defaultProps = {
  style: {}
};

export default DownUpDeleteButtonsBlock;
