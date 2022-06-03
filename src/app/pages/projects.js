import React from "react";
import { ProjectPane, SideBar } from "../components/project/";

const Projects = () => {
  return (
    <div className="projects">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="layout">
        <ProjectPane />
      </div>
    </div>
  );
};

export default Projects;
