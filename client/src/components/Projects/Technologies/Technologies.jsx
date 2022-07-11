import React from "react";
import style from "./Technologies.module.css";

const Technologies = ({ technologies }) => {
  return (
    <div className={style.technologiesSector}>
      {technologies.map((technology) => {
        return <div className={style.technologyItem}> {technology} </div>;
      })}
    </div>
  );
};

export default Technologies;
