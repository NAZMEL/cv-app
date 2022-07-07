import React from "react";
import style from "./Responsibilities.module.css";

const Responsibilities = (props) => {
  return (
    <div className={style.responsibilityBlock}>
      <div className={style.responsibilitiesTitle}>Responsibilities</div>
      {props.responsibilities.map((responsibility) => {
        return <ul className={style.responsibilityItem}>
          <li>{responsibility}</li>
          </ul>;
      })}
    </div>
  );
};

export default Responsibilities;
