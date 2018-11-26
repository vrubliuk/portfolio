import React from "react";
import "./Profile.scss";
import PropTypes from "prop-types";
import avatar from "../../assets/images/avatar.jpg";

import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences";
import Education from "./Education/Education";
import Languages from "./Languages/Languages";

const Profile = ({ profile }) => {
  const { general, contacts, skills, experiences, education, languages } = profile;

  return (
    <div className="Profile">
      <div className="general">
        <img className="avatar" src={avatar} alt="" />
        <div className="name">
          <span>{general.name}</span>
          <span>{general.surname}</span>
        </div>
        <div className="qualification">{general.qualification}</div>
      </div>
      

      <Contact />
      <Skills />
      <Experiences />
      <Education />
      <Languages />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object
};

export default Profile;
