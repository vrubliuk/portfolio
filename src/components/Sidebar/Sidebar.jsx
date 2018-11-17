import React from "react";
import "./Sidebar.scss";
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences";
import Education from "./Education/Education";
import Languages from "./Languages/Languages";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Profile />
      <Contact />
      <Skills />
      <Experiences />
      <Education />
      <Languages />
    </div>
  );
};

export default Sidebar;
