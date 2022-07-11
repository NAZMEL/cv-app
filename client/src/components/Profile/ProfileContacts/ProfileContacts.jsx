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
              url={contacts[key]}
              style={{ height: 30, width: 30 }}
              bgColor="whitesmoke"
            />
          </a>
        );
      })}
    </div>
  );
};

export default ProfileContacts;
