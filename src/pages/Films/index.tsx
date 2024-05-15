import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFilmById, selectFilm } from "../../features/film/filmSlice";

export const Films: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch();
    const { films } = useSelector(selectFilm);
    console.log(films);





    return (
        <div>
            {
                films.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <h3>{elm.name}</h3>
                            <h4>{elm.genres}</h4>
                            <img src={elm.img} width={350} height={300} />
                            <hr/>
                            <button onClick={() => dispatch(deleteFilmById(elm.id))}>&times;</button>
                            <hr/>
                            <Link to={'/detailsFilms/'+elm.id}>See More</Link>
                            <hr />
                        </div>
    )
})
            }
        </div >
    );
});
