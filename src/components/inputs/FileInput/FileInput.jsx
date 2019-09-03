import React, { Component } from "react";
import "./FileInput.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../assets/icons/index";

class FileInput extends Component {
  input = React.createRef();

  handleChange = e => {
    const file = e.target.files[0];
    file && this.props.changeHandler(file);
  };

  handleRemove = e => {
    e.stopPropagation();
    this.input.current.value = "";
    this.props.removeHandler();
  };

  render() {
    const { fileName, label } = this.props;
    const { input, handleChange, handleRemove } = this;

    return (
      <div className="FileInput">
        {label && <div className="label">{label}:</div>}
        <div className="preview" onClick={() => input.current.click()}>
          {fileName ? (
            <>
              <div className="text">{fileName}</div>
              <div className="remove" onClick={handleRemove}>
                <FontAwesomeIcon icon={icons.trash} />
              </div>
            </>
          ) : (
            <div className="text">Upload file</div>
          )}
        </div>
        <input type="file" onChange={handleChange} ref={input} />
      </div>
    );
  }
}

FileInput.propTypes = {
  fileName: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default FileInput;
