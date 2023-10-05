import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError()

    return (
        <>
            <div>
                <h6>Opps! an error Occured</h6>
                <p>{error.statusText || error.message}</p>
                <Link to="/">Back to home page</Link>
            </div>
        </>
    )
}

export default ErrorPage;