import React from "react";
import { Link } from "react-router-dom";

export const Menu: React.FC = React.memo((): JSX.Element => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={'/'}>Films</Link></li>
                    <li><Link to={'/addFilms'}>Add Films</Link></li>
                    <li><Link to={'/genres'}>Genres</Link></li>
                    <li><Link to={'/addGenre'}>Add Genres</Link></li>
                </ul>
            </nav>
        </div>
    );
});
