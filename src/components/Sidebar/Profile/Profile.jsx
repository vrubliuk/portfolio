import React from "react";
import "./Profile.scss"
import avatar from "../../../assets/images/avatar.jpg";

const Profile = () => {
  return (
    <div className="Profile">
      <img className="avatar" src={avatar} alt="" />
      <div className="name">Valentyn Rubliuk</div>
      <div className="profession">Full Stack Developer</div>
    </div>
  );
};

export default Profile;
