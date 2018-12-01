import React, { Component } from "react";
import "./Resume.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons/index";
import Button from "../Button/Button";



class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        
        <div className="right">
          <Button icon="download" text="Download Resume" additionalClassName="blue" style={{ width: "200px", height: "40px"}} />
          <Button icon="open" text="Open Resume" additionalClassName="blue" style={{ width: "200px", height: "40px"}} />
        </div>
      </div>
    );
  }
}

export default Resume;
