import React from "react";
import "./Home.scss";
import { connect } from "react-redux";
import Sidebar from "../../hoc/Sidebar/Sidebar.jsx";

import Profile from "../../components/Profile/Profile";
import LogIn from "../../components/buttons/LogIn";
import Resume from "../../components/Resume/Resume";
import Tags from "../../components/Tags/Tags";

const mapStateToProps = ({ profile, projects }) => ({ profile, projects: projects.projects });

const Home = ({ profile, projects }) => {
  return (
    <div className="Home">
      <Sidebar>
        <Profile profile={profile} />
      </Sidebar>
      <div>
        <LogIn/>
        <Tags projects={projects} />
        <Resume/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
