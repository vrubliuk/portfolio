import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../assets/icons";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={icons.location} />
        </div>
        <div className="text">
          <span>Lviv, UA</span>
        </div>
      </div>

      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={icons.phone} />
        </div>
        <div className="text">
          <span>(063) 75 74 922</span>
        </div>
      </div>

      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={icons.mail} />
        </div>
        <div className="text">
          <a href="mailto: vrubliuk@gmail.com">vrubliuk@gmail.com</a>
        </div>
      </div>

      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={icons.github} />
      </div>
        <div className="text">
          <a href="https://github.com/vrubliuk" target="_blank" rel='noreferrer noopener'>github.com/vrubliuk</a>
        </div>
      </div>

       <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={icons.linkedIn} />
        </div>
        <div className="text">
          <a href="https://github.com/vrubliuk" target="_blank" rel='noreferrer noopener'>github.com/vrubliuk</a>
        </div>
      </div>



    </div>
  );
};

export default Contact;
