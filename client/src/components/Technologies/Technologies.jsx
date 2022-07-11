import React from "react";
import style from "./Technologies.module.css";

const Technologies = (props) => {
  return (
    <div className={style.technologiesSection}>
      <div className={style.technologiesTitle}>Technologies</div>

      {props.technologies.map((technology) => {
        return (
          <div>
            {technology.languages.map((language) => {
              return <div>{language}</div>;
            })}
            <hr />

            {technology.mainLibraries.map((library) => {
              return <div>{library}</div>;
            })}
            <hr />

            {technology.databases.map((database) => {
              return <div>{database}</div>;
            })}
            <hr />

            {technology.technologies.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
