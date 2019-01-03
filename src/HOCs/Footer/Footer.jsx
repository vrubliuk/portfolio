import React from "react";
import "./Footer.scss";
import PropTypes from "prop-types";

const Footer = ({ children }) => {
  return <div className="Footer">
  <div className="placeholder"></div>
  <div className="content">{children}</div>
  </div>;
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
