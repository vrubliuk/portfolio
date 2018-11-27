import React from "react";
import "./Profile.scss";
import PropTypes from "prop-types";
import avatar from "../../assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons/index";

const Profile = ({ profile }) => {
  const { general, contacts, skills, experiences, institutions, languages } = profile;

  return (
    <div className="Profile">

      <div className="general section">
        <img className="avatar" src={avatar} alt="" />
        <div className="name">
          <span>{general.name}</span>
          <span>{general.surname}</span>
        </div>
        <div className="qualification">{general.qualification}</div>
      </div>

      <div className="contact section">
        <div className="row">
          <div className="icon">
            <FontAwesomeIcon icon={icons.location} />
          </div>
          <div className="text">
            <span>{contacts.location}</span>
          </div>
        </div>
        <div className="row">
          <div className="icon">
            <FontAwesomeIcon icon={icons.phone} />
          </div>
          <div className="text">
            <span>{contacts.phone}</span>
          </div>
        </div>
        <div className="row">
          <div className="icon">
            <FontAwesomeIcon icon={icons.email} />
          </div>
          <div className="text">
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </div>
        </div>
        <div className="row">
          <div className="icon">
            <FontAwesomeIcon icon={icons.github} />
          </div>
          <div className="text">
            <a href={`https://${contacts.github}`} target="_blank" rel="noreferrer noopener">
              {contacts.github}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="icon">
            <FontAwesomeIcon icon={icons.linkedIn} />
          </div>
          <div className="text">
            <a href={`https://${contacts.linkedIn}`} target="_blank" rel="noreferrer noopener">
              {contacts.linkedIn}
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="title">Skills</div>
        {skills.map(skill => (
          <div className="subsection">
            <div className="title">{skill.category}</div>
            {skill.technologies.map(technology => (
              <div className="row">{technology}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="section">
        <div className="title">Experiences</div>
        {experiences.map(experience => (
          <div className="subsection">
            <div className="title">{experience.position}</div>
            <div className="row">
              <span>{experience.company}</span>, <span>{experience.city}</span>
            </div>
            <div className="row">
              <span>{experience.startDate}</span> - <span>{experience.endDate}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="title">Education</div>
        {institutions.map(institution => (
          <div className="subsection">
            <div className="title">{institution.speciality}</div>
            <div className="row">{institution.name}</div>
            <div className="row">
              <span>{institution.startDate}</span> - <span>{institution.endDate}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="title">Languages</div>
        <div>
          {languages.map(language => (
            <div className="subsection">
              <span className="title">{language.name}</span> <span className="row">({language.level})</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object
};

export default Profile;
