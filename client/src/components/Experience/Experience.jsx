import React from "react";
import Responsibilities from "./Responsibilities/Responsibilities";
import style from "./Experience.module.css";

const Experience = (props) => {
  return (
    <div className={style.experienceSection}>
      <div className={style.experienceTitle}>Work experience</div>
      {props.experience.map((item) => {
        return (
          <div className={style.experienceBlock}>
            <span className={style.experienceJob}>
              {item.position} at {item.job}
            </span>
            
            <span className={style.experienceDate}>
              {item.workingPeriod}
            </span>
            <hr />
            <Responsibilities responsibilities={item.responsibilities} />
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
