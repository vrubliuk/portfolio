import React from "react";
import "../../assets/styles/button.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/icons";

const LogOut = () => {
  return (
    <div className="button">
      <FontAwesomeIcon icon={icons.logOut} />
    </div>
  );
};

export default LogOut;
