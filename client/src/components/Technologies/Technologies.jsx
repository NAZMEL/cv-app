import React from "react";
import style from "./Technologies.module.css";
import TechnologiesItems from "./TechnologiesItems/TechnologiesItems";

const Technologies = (props) => {
  return (
    <div className={style.technologiesSection}>
      <div className={style.technologiesTitle}>Technologies</div>

      {props.technologies.map((technology) => {
        return (
          <div>
            <div className={style.technologiesBlock}>
              <div className={style.technologyItemsTitle}>
                Programming languages
              </div>
              <TechnologiesItems items={technology.languages} />
            </div>

            <div className={style.technologiesBlock}>
              <div className={style.technologyItemsTitle}>Main libraries</div>
              <TechnologiesItems items={technology.mainLibraries} />
            </div>

            <div className={style.technologiesBlock}>
              <div className={style.technologyItemsTitle}>Main tools</div>
              <TechnologiesItems items={technology.tools} />
            </div>

            <div className={style.technologiesBlock}>
              <div className={style.technologyItemsTitle}>Dabases</div>
              <TechnologiesItems items={technology.databases} />
            </div>

            <div className={style.technologiesBlock}>
              <div className={style.technologyItemsTitle}>
                Experience with technologies before
              </div>
              <TechnologiesItems items={technology.otherLanguages} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
