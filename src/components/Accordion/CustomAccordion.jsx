import React, { useState} from "react";
import styles from "./CustomAccordion.module.css";
import { ReactComponent as UpArrowIcon } from "../../assets/UpArrow.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/DownArrow.svg";

const CustomAccordion = ({data}) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const { question, answer} = data;
    return (
        <div className={styles.wrapper}>
           <div className={styles.questionWrapper}>
            <h3>{question}</h3>
            <p onClick={handleClick}>
                {show ? <UpArrowIcon/> : <DownArrowIcon/>}
            </p>
           </div>
           {show && <p className={styles.answerWrapper}>{answer}</p>}
        </div>
    )

};

export default CustomAccordion;