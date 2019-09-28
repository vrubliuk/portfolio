import React from "react";
import "./Tags.scss";
import PropTypes from "prop-types";
import useWidth from "../../hooks/useWidth";
import Dropdown from "../Dropdown/Dropdown.jsx";

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

  const modifiedTag = tag => tag.replace(/\W/gi, "");

  const dropdownOptions = () => {
    return ["All", ...uniqueTagsSorted].map(tag => ({ value: modifiedTag(tag), label: tag }));
  };

  const { isSmall } = useWidth();

  return isSmall ? (
    <Dropdown className="TagsDropdown" options={dropdownOptions()} value={activeTag} changeHandler={value => setActiveTag(value)} />
  ) : (
    <div className="Tags">
      {["All", ...uniqueTagsSorted].map((tag, i) => (
        <button
          className={`tag ${modifiedTag(tag) === activeTag && "tag-active"}`}
          key={i}
          onClick={() => {
            setActiveTag(modifiedTag(tag));
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
