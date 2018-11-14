import React from "react";
import "./Sidebar.scss";
import Profile from "../Profile/Profile";
import Contact from "../Contact/Contact";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Profile />
      <Contact />
    </div>
  );
};

export default Sidebar;
