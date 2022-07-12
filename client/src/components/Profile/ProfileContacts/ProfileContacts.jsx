import React from "react";
import { SocialIcon } from "react-social-icons";
import style from "./ProfileContacts.module.css";

const ProfileContacts = (contacts) => {
  return (
    <div className={style.contactsBlock}>
      {Object.keys(contacts).map((key) => {
        return (
          <a className={style.profileContact} key={key}>
            <SocialIcon
            className={style.profileIcon}
              url={contacts[key]}
              style={{ height: 40, width: 40 }}
              bgColor="whitesmoke"
            />
          </a>
        );
      })}
    </div>
  );
};

export default ProfileContacts;
