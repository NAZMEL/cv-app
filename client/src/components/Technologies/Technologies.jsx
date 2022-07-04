import React from "react";

const Technologies = (props) => {
  return (
    <div>
      Technologies
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
