import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Projects from "../../components/Projects/Project";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <Projects/>
    </div>
  );
};

export default Home;
