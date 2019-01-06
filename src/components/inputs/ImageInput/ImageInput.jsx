import React, { Component } from "react";
import "./ImageInput.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../assets/icons/index";

class ImageInput extends Component {
  input = React.createRef();

  handleChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.props.changeHandler(reader.result);
    };
    file && reader.readAsDataURL(file);
  };

  handleRemove = e => {
    e.stopPropagation();
    this.input.current.value = "";
    this.props.removeHandler();
  };

  render() {
    const { value, label } = this.props;
    const { input, handleChange, handleRemove } = this;

    return (
      <div className="ImageInput">
        {label && <div className="label">{label}:</div>}
        <div className="preview" style={{ backgroundImage: `url("${value}")` }} onClick={() => input.current.click()}>
          {value ? (
            <div className="remove" onClick={handleRemove}>
              <FontAwesomeIcon icon={icons.trash} />
            </div>
          ) : (
            <div className="text">
              <FontAwesomeIcon icon={icons.userLogo} />
              <div>Upload image</div>
            </div>
          )}
        </div>
        <input type="file" onChange={handleChange} ref={input} />
      </div>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default ImageInput;
