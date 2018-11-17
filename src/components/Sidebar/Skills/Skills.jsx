import React from "react";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../assets/icons";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="title">Skills</div>
      <div className="row">
        <div className="subtitle">Front-end</div>
        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>React</div>
        </div>
        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>React</div>
        </div>
        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>React</div>
        </div>
      </div>

      <div className="row">
        <div className="subtitle">Back-end</div>
        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>Node</div>
        </div>
        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>MongoDB</div>
        </div>
      </div>

      <div className="row">
        <div className="subtitle">Others</div>

        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>Photoshop</div>
        </div>
        <div className="skill">
          <div>
            <FontAwesomeIcon icon={icons.checkMark} />
          </div>
          <div>Gimp</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
