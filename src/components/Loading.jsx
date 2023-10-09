import React from "react";
import styles from "../styles/loading.module.css"

function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.spin}></div>
        </div>
    )
}

export default Loading;