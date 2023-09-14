import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import styles from "../Carousel.module.css";

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining,setIsBegining] = useState(true);

    useEffect(() => {
        swiper.on("slideChange",()=> {
            setIsBegining(swiper.isBeginning);
        })
    },[swiper])
    return (
        <div className={styles.leftNavigation}>
            {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )
}

export default CarouselLeftNavigation;