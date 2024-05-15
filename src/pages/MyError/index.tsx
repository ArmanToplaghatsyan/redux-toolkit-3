import React from "react";
import { Link } from "react-router-dom";

export const MyError: React.FC = React.memo((): JSX.Element => {
    return (
        <div>
            <h2>Error 404</h2>
            <h3>The page is not definded ! </h3>
            <p>I'm sorry, maybe you try again ? </p>
            <Link to={'/'}>Back</Link>
        </div>

    );
});
