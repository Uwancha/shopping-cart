import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styles from "../styles/error.module.css"

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <div className={styles.err}>
                <h4>Opps! an error has Occured</h4>
                <p className={styles.message}>{error.statusText || error.message}</p>
                <Link to="/">Back to home page</Link>
            </div>
        </>
    )
}

export default ErrorPage;