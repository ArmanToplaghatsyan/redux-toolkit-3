import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFilmById, selectFilm } from "../../features/film/filmSlice";
import "./style.scss";

export const Films: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch();
    const { films } = useSelector(selectFilm);
    console.log(films);

    return (
        <div className="film">
            {films.map((elm) => {
                return (
                    <div key={elm.id}>
                        <img src={elm.img} width={350} height={300} />
                        <div className="d1">
                            <h3>{elm.name}</h3>
                            <p>{elm.genres?.join(", ")}</p>
                            <div>
                                <Link to={"/detailsFilms/" + elm.id}>
                                    See More
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    onClick={() =>
                                        dispatch(deleteFilmById(elm.id))
                                    }
                                    width={25}
                                    fill={"azure"}
                                    height={25}
                                    className="svg"
                                >
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
});
