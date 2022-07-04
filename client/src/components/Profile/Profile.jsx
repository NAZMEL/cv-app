import React from "react";

const Profile = ({
  fullName,
  position,
  email,
  phone,
  telegram,
  linkedIn,
  languages,
}) => {
  return (
    <div>
      {fullName} <br />
      {position}
      <br />
      {email}
      <br />
      {phone}
      <br />
      {telegram}
      <br />
      {linkedIn}
      <br />
      {Object.keys(languages).map((key) => {
        return (
          <p>
            {key} - {languages[key]}
          </p>
        );
      })}
    </div>
  );
};

export default Profile;
