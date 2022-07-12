import React from "react";
import style from "./MotivationLetter.module.css";

const MotivationLetter = (props) => {
    return (
        <ul className={style.motivationLetterBlock}>
            {props.letter.map((key) => {
                return (
                    <li className={style.motivationLetterItem}>{key} </li>
                )
            })}
        </ul>
    );
}

export default MotivationLetter;