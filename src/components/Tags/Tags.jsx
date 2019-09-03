import React from "react";
import "./Tags.scss";
import PropTypes from "prop-types";

const Tags = ({ projects, activeTag, setActiveTag }) => {
  const tags = {};
  projects.forEach(project => {
    project.tags.forEach(tag => {
      tag in tags ? (tags[tag] = ++tags[tag]) : (tags[tag] = 1);
    });
  });
  const uniqueTagsSorted = Object.keys(tags)
    .filter(tag => tag !== "")
    .sort((a, b) => {
      if (tags[a] < tags[b]) return 1;
      if (tags[a] > tags[b]) return -1;
      return 0;
    });

  return (
    <div className="Tags">
      {["All", ...uniqueTagsSorted].map((tag, i) => (
        <button
          className={`tag ${tag === activeTag && "tag-active"}`}
          key={i}
          onClick={() => {
            setActiveTag(tag);
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

Tags.propTypes = {
  projects: PropTypes.array
};

Tags.defaultProps = {
  projects: []
};

export default Tags;
