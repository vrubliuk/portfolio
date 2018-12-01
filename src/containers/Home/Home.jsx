import React, {Component} from "react";
import "./Home.scss";
import { connect } from "react-redux";
import Sidebar from "../../hoc/Sidebar/Sidebar.jsx";

import Profile from "../../components/Profile/Profile";
import LogIn from "../../components/buttons/LogIn";
import Resume from "../../components/Resume/Resume";
import Tags from "../../components/Tags/Tags";
import Projects from "../../components/Projects/Projects";


const mapStateToProps = ({ profile, projects }) => ({ profile, projects: projects.projects.sort((a, b) => b.priority - a.priority) });

class Home extends Component {
  state = {
    activeTag: "All"
  }

  setActiveTag = (tag) => {
    this.setState({
      activeTag: tag
    })
  }


  render() {
    return (
      <div className="Home">
        <Sidebar>
          <Profile profile={this.props.profile} />
        </Sidebar>
        <div>
          <LogIn/>
          <Tags projects={this.props.projects} activeTag={this.state.activeTag} setActiveTag={this.setActiveTag} />
          <Projects projects={this.props.projects} activeTag={this.state.activeTag} />
          <Resume/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
