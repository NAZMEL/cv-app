import React from "react";
import style from "./ProfileLanguages.module.css";

const ProfileLanguages = (props) => {
  return (
    <div className={style.languagesBlock}>
      {Object.keys(props.languages).map((key) => {
        return (
          <p key={key} className={style.languagesInfo}>
            <span className={style.languageName}>{key}</span> - {props.languages[key]}
          </p>
        );
      })}
    </div>
  );
};

export default ProfileLanguages;
