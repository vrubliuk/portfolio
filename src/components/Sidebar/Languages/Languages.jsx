import React from "react";
import "./Languages.scss";

const Languages = () => {
  return (
    <div className="Languages">
      <div className="title">Languages</div>
      <div>
        <div className="row">
          <span className="language">Ukrainian</span>{" "}
          <span className="level">(native)</span>
        </div>
        <div className="row">
          <span className="language">English</span>{" "}
          <span className="level">(professional)</span>
        </div>
      </div>

    </div>
  );
};

export default Languages;
