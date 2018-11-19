import React, { Component } from "react";
import "./Resume.scss";

class Resume extends Component {
  state = {
    extension: ".exe"
  };

  render() {
    return (
      <div className="Resume">
        <div className="left">Resume:</div>
        <div className="right">
          <button className="button medium" type="button">
            Download .pdf
          </button>
          <button className="button long" type="button">
            Open in New Tab
          </button>
          <button className="button medium" type="button">
            Download .doc
          </button>
        </div>
      </div>
    );
  }
}

export default Resume;
