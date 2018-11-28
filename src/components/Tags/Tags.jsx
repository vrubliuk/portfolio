import React from "react";
import "./Tags.scss"
import PropTypes from "prop-types";

const Tags = ({ projects }) => {
  return (
    <div className="Tags">
      <button>All</button>
    </div>
  );
};

Tags.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Tags;
