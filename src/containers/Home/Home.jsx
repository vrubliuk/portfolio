import React from "react";
import "./Home.scss";
import { connect } from "react-redux";
import Sidebar from "../../hoc/Sidebar/Sidebar.jsx";

import Projects from "../../components/Projects/Projects";
import Profile from "../../components/Profile/Profile";

const mapStateToProps = ({ profile }) => ({ profile });

const Home = ({ profile }) => {
  return (
    <div className="Home">
      <Sidebar>
        <Profile profile={profile} />
      </Sidebar>
      <Projects />
    </div>
  );
};

export default connect(mapStateToProps)(Home);
