import React from "react";
import Responsibilities from "./Responsibilities/Responsibilities";
import style from "./Experience.module.css";

const Experience = (props) => {
  return (
    <div className={style.experienceSection}>
      {props.experience.map((item) => {
        return (
          <div className={style.experienceBlock}>
            <span className={style.experienceInfo}>Organization: {item.job}</span>
            <span className={style.experienceInfo}>Position: {item.position}</span>
            <span className={style.experienceInfo}>Period: {item.workingPeriod}</span>

            <Responsibilities responsibilities={item.responsibilities} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
