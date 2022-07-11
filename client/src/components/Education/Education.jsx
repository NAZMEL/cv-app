import React from "react";
import style from "./Education.module.css";

const Education = ({ education }) => {
  return (
    <div className={style.educationSection}>
      <div className={style.educationTitle}>Education and courses</div>

      {education.map((item) => {
        return (
          <div key={item.area} className={style.educationBlock}>
            <span className={style.educationArea}>{item.area}</span>
            <hr/>
            <span className={style.educationPlace}>{item.place}</span>
            <span className={style.eduactionDate}>{item.dates}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
