import React from "react";
import styles from "./ProfileImage.module.css";

const ProfileImage = (props) => {
  return <img src={props.imgPath} className={styles.profileImg} alt="profile"/>;
};

export default ProfileImage;
