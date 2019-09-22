import React from "react";
import "./Projects.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons/index";
import Button from "../buttons/Button/Button.jsx";

const Projects = ({ projects }) => {
  const modifiedTags = tags => {
    return tags.reduce((acc, tag) => acc + " " + tag.replace(/\W/gi, ""), "");
  };

  return (
    <div className="Projects">
      {projects.map((project, i) => (
        <div className={`isotope-project ${modifiedTags(project.tags)}`} key={i}>
          <div>
            <img src={project.screenshot} alt="" />
            <div className="cover">
              <div className="summary">{project.summary}</div>
              <div className="buttons">
                <a href={project.websiteUrl} target="_blank" rel="noreferrer noopener">
                  <Button icon="open" text="Open Website" additionalClassName="transparent" style={{ width: "152px", height: "40px" }} />
                </a>
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer noopener">
                  <Button icon="github" text="Explore Repo" additionalClassName="transparent" style={{ width: "152px", height: "40px" }} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="name">
              <a href={project.websiteUrl} target="_blank" rel="noreferrer noopener">
                {project.name}
              </a>
            </div>
            <div className="tags">
              <span className="icon">
                <FontAwesomeIcon icon={icons.tag} />
              </span>
              {project.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTag: PropTypes.string.isRequired
};

export default Projects;
