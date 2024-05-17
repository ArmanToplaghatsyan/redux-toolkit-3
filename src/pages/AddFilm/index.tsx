import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addFilm } from "../../features/film/filmSlice";
import { IFilm } from "../../type/type";
import './style.scss'

export const AddFilm: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<IFilm>()
    const save = (data: IFilm) => {
        dispatch(addFilm({ ...data, id: Date.now() }));
        console.log(data);
        
        reset();
    };

    return (
        <div className="films">
            <div>
                <form onSubmit={handleSubmit(save)}>
                <h2>Add Film</h2>
                <label>name</label>
                <input type="text" placeholder="name" {...register('name', { required: 'Enter name' })} />
                {errors.name && <p>{errors.name.message}</p>}
                <label>genres</label>
                <input type="text" placeholder="genres" {...register('genres', { required: 'Enter genres' })} />
                {errors.genres && <p>{errors.genres.message}</p>}
                <label>img</label>
                <input type="text" placeholder="img" {...register('img', { required: 'Enter img' })} />
                {errors.img && <p>{errors.img.message}</p>}
                <label>feedback</label>
                <input type="text" placeholder="feedback" {...register('feedback', { required: 'Enter feedback' })} />
                {errors.feedback && <p>{errors.feedback.message}</p>}
                <button>save</button>
            </form>  
            </div>
        </div>
    );
});
