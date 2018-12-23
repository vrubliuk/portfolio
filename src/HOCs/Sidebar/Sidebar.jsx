import React from "react";
import "./Sidebar.scss";
import PropTypes from "prop-types";

const Sidebar = ({ children }) => {
  return <div className="Sidebar">{children}</div>;
};

Sidebar.propTypes = {
  children: PropTypes.element
};

export default Sidebar;
