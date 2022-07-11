import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import style from "./Profile.module.css";

const Profile = ({
  fullName,
  position,
  email,
  phone,
  telegram,
  facebook,
  linkedIn,
  languages,
  motivationLetter,
  imgPath,
}) => {
  return (
    <>
      <div className={style.profileSection}>
        <ProfileImage imgPath={imgPath} />

        <div className={style.profileBlock}>
          <span className={style.profileName}>{fullName}</span>
          <span className={style.profilePosition}>{position}</span>
          <hr />
          <ProfileContacts
            phone={phone}
            email={email}
            telegram={telegram}
            facebook={facebook}
            linkedIn={linkedIn}
          />
          <hr />
          <ProfileLanguages languages={languages} />
        </div>
      </div>
      <div className={style.motivationLetter}>{motivationLetter}</div>
    </>
  );
};

export default Profile;
