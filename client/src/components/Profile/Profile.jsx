import React from "react";
import { Container } from "react-bootstrap";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import style from "./Profile.module.css";

const Profile = ({
  fullName,
  position,
  email,
  phone,
  telegram,
  linkedIn,
  languages,
  imgPath,
}) => {
  return (
    <Container className={style.profileBlock}>
      <ProfileImage imgPath={imgPath} />

      <div className={style.profileInfo}>
        <span className={style.infoBlock}>{fullName}</span>
        <span className={style.infoBlock}>{position}</span>
        <span className={style.infoBlock}>{email}</span>
        <span className={style.infoBlock}>{phone}</span>
        <span className={style.infoBlock}>{telegram}</span>
        <span className={style.infoBlock}>{linkedIn}</span>
      </div>

      <ProfileLanguages languages={languages} />
    </Container>
  );
};

export default Profile;
