import React from "react";
import "./Projects.scss";
import LogIn from "../buttons/LogIn";
import Resume from "../Resume/Resume";
import {connect} from "react-redux"
import * as actions from "../../store/actions/index";


const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(actions.getProjects())
  };
};


const Projects = ({projects, getProjects}) => {
  return (
    <div className="Projects">
      <LogIn/>
      <Resume/>
      <button onClick={getProjects.bind(this)}>Ololo</button>

      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>
      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>
      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>
      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>
      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>
      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>
      <div>
        asdasd dddddddddddfsd sdfsdfsdfsfsd  sdfsdfsdfsd sdfsdf sdfsdfsd ddsdfsdfsdfsdf sdfsdfsdfsdfsdfsdf     sdfsdfsdf      dfdddf
      </div>

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);