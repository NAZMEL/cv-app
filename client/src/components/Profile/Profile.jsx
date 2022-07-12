import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import MotivationLetter from "./MotivationLetter/MotivationLetter";
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
          <div className={style.profileRow}>
            <ProfileContacts
              phone={phone}
              email={email}
              telegram={telegram}
              facebook={facebook}
              linkedIn={linkedIn}
            />
            <ProfileLanguages languages={languages} />
          </div>
        </div>
      </div>
      <hr style={{ color: "#fff", height: "2px" }} />
      <MotivationLetter letter={motivationLetter} />
    </>
  );
};

export default Profile;
