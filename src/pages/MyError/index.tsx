import React from "react";
import { Link } from "react-router-dom";
import './style.scss'

export const MyError: React.FC = React.memo((): JSX.Element => {
    return (
        <div className="error">
            <h2>Error 404</h2>
            <h3>The page is not definded ! </h3>
            <p>I'm sorry, maybe you try again ? </p>
            <Link to={'/'}>Back</Link>
        </div>

    );
});
