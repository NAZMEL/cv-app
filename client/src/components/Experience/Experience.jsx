import React from "react";

const Experience = (props) => {
  return (
    <div>
      {props.experience.map((item) => {
        return <div>
            {item.job}
            {item.position}
            {item.workingPeriod}
            <br/><br/>
            {item.responsibilities.map(responsibility =>{
                return <div>
                        {responsibility}
                    </div>
            })}
            <hr/>
        </div>;
      })}
    </div>
  );
};

export default Experience;
