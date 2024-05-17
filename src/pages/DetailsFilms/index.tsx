import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IFilm } from "../../type/type";
import { useDispatch, useSelector } from "react-redux";
import filmSlice, {
    addFeedback,
    addFilm,
    findFilmById,
    selectFilm,
} from "../../features/film/filmSlice";
import { useParams } from "react-router-dom";
import { selectGenres } from "../../features/genre/genreSlice";
import "./style.scss";

export const DetailsFilms: React.FC = React.memo((): JSX.Element => {
    const {
        handleSubmit,
        reset,
        formState: { errors },
        register,
    } = useForm<{ str: string }>();

    const dispatch = useDispatch();
    const { id } = useParams();
    const save = (data: { str: string }) => {
        console.log(data);

        dispatch(addFeedback({ ...data, id }));
        dispatch(findFilmById(id));
        reset();
    };
    const { film } = useSelector(selectFilm);

    useEffect(() => {
        if (id) {
            dispatch(findFilmById(id));
        }
    }, [id]);

    return (
        <div className="film">
            <div>
                <h3> {film.name}</h3>
                <h4> {film.genres?.join(", ")}</h4>
                <ul>
                    {film.feedback?.map((elm, i) => {
                        return <li key={i}>{elm}</li>;
                    })}
                </ul>
            </div>

            <img src={film.img} width={300} height={300} />
            <div>
                <form onSubmit={handleSubmit(save)}>
                    <textarea
                        placeholder="feedback"
                        {...register("str", { required: "Enter feedback" })}
                    ></textarea>
                    {errors.str && <p>{errors.str.message}</p>}

                    <button>save</button>
                </form>
            </div>
        </div>
    );
});
