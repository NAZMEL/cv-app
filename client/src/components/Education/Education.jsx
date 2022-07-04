import React from "react";

const Education = ({ education }) => {
  return (
    <div>
      Education
      {education.map((item) => {
        return (
          <div>
            {item.area}
            {item.place}
            {item.dates}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Education;
