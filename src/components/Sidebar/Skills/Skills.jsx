import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="title">Skills</div>
      <div className="row">
        <div className="subtitle">Front-end</div>
        <div className="skill">React, Redux</div>
        <div className="skill">Vue, Vuex</div>
        <div className="skill">React</div>
      </div>

      <div className="row">
        <div className="subtitle">Back-end</div>
        <div className="skill">Node</div>
        <div className="skill">MongoDB</div>
      </div>

      <div className="row">
        <div className="subtitle">Others</div>
        <div className="skill">Photoshop</div>
        <div className="skill">Gimp</div>
      </div>
    </div>
  );
};

export default Skills;
