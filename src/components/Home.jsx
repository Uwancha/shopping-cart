import React from "react";
import styles from "../styles/home.module.css";
import ImageSlider from "./ImageSlider";

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.home}>
                <div className={styles.message}>
                    <div>
                        <h2 className={styles.h2}>Welcome! Happy Shopping</h2>
                        <p className={styles.p}>You know you can buy anything here! Well, actually No! This is a Demo!</p>
                        <p className={styles.p}> But you know what, You don't know what you don't know</p>
                    </div>
                    <div className={styles.callToaction}>
                        <p className={styles.ctaMessage }>50$ credit when you first register</p>
                        <button className={styles.button}>Sign Up</button>
                    </div>
                </div>
                
            </div>
            <div className={styles.slider}>
                <ImageSlider  />
            </div>
        </div>
    )
}

export default Home;