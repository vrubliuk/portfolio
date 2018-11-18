import React from "react";
import "../../assets/styles/button.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";

const LogIn = () => {
  return (
    <div className="button">
      <FontAwesomeIcon icon={icons.logIn} />
    </div>
  );
};

export default LogIn;
