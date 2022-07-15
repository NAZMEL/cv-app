import React from "react";
import style from "./TechnologiesItems.module.css";

const TechnologiesItems = ({ items }) => {
  return (
    <div className={style.itemArea}>
      {items.map((item) => {
        return <div className={style.itemName}>{item}</div>;
      })}
    </div>
  );
};

export default TechnologiesItems;
