import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title, data, type }) => {
    const [carouseToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle(!carouseToggle);
    }

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{carouseToggle ? "show All" : "collapse All"}</h4>
            </div>
            {
                data?.length === 0 ? (
                    <CircularProgress />
                ) : (<div className={styles.cardWrapper}>
                    {!carouseToggle ? (
                        <div className={styles.wrapper}>
                            {data.map((ele) => (
                                <Card data={ele} type={type} key={ele.id} />
                            ))}
                        </div>
                    ) : (<></>)}
                </div>)
            }
        </div>
    )
}

export default Section;