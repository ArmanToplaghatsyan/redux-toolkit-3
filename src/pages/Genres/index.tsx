import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGenresById, selectGenres } from "../../features/genre/genreSlice";

export const Genres: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch()
    const { genres } = useSelector(selectGenres)
    console.log(genres);


    return (
        <div>
            {
                genres.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <h2>
                                {elm.name}
                            </h2>
                            <button onClick={() => {
                                dispatch(deleteGenresById(elm.id))
                            }}>
                                &times;
                            </button>
                            <hr />
                            <Link to={'/detailsGenres/'+elm.name}>See More</Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
});
