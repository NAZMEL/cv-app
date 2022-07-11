import React from "react";
import style from "./Projects.module.css";
import Technologies from "./Technologies/Technologies";

const Projects = (props) => {
  return (
    <div className={style.portfolioSection}>
      <div className={style.portfolioTitle}>Portfolio</div>
      {props.projects.map((project) => {
        return (
          <div className={style.portfolioItem}>
            <div className={style.projectName}>
              <a href={project.link} target="_blank">
                {project.name}
              </a>
            </div>
            <div className={style.projectDescription}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <hr />
            <Technologies technologies={project.technologies} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
