import React from "react";
import "./LogIn.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";

const LogIn = () => {
  return (
    <button type="button" className="LogIn">
      <FontAwesomeIcon icon={icons.logIn} />
    </button>
  );
};

export default LogIn;
