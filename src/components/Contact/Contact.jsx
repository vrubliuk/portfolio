import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon="map-marker-alt" />
        </div>
        <div className="text">
          <span>Lviv, UA</span>
        </div>
      </div>

      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon="phone" />
        </div>
        <div className="text">
          <span>(063) 75 74 922</span>
        </div>
      </div>

      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon="envelope" />
        </div>
        <div className="text">
          <a href="mailto: vrubliuk@gmail.com">vrubliuk@gmail.com</a>
        </div>
      </div>

      <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
        <div className="text">
          <a href="https://github.com/vrubliuk" target="_blank">github.com/vrubliuk</a>
        </div>
      </div>

       <div className="row">
        <div className="icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </div>
        <div className="text">
          <a href="https://github.com/vrubliuk" target="_blank">github.com/vrubliuk</a>
        </div>
      </div>



    </div>
  );
};

export default Contact;
