
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addGenres } from "../../features/genre/genreSlice";
import { IFilm, IGenre } from "../../type/type";
import './style.scss';

export const AddGenre: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<IGenre>();
    const save = (data: IGenre) => {
        dispatch(addGenres({ ...data, id: Date.now() }));
        reset();
    };

    return (
        <div className="addgenres">
            <form onSubmit={handleSubmit(save)}>
                <h2>Add Genre</h2>
                <label>name</label>
                <input type="text" placeholder="name" {...register('name', {required: "Enter name"})}/>
                {errors.name && <p>{errors.name.message}</p>}
                <button>save</button>
            </form>
        </div>
    );
});
