import React from "react";

const Projects = (props) => {
  return (
    <div>
      {props.projects.map((project) => {
        return (
          <div>
            {project.name} - {project.link}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
