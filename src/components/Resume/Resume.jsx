import React, { Component } from "react";
import "./Resume.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons/index";

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        {/* <div className="background">

        </div> */}

        <div className="right">
          <button className="button" type="button">
            <span className="icon">
              <FontAwesomeIcon icon={icons.download} />
            </span>

            <span className="text">Download Resume</span>
          </button>
          <button className="button" type="button">
            <span className="icon">
              <FontAwesomeIcon icon={icons.open} />
            </span>
            <span className="text">Open Resume</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Resume;
