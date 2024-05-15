import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addFilm } from "../../features/film/filmSlice";
import { IFilm } from "../../type/type";

export const AddFilm: React.FC = React.memo((): JSX.Element => {
    const dispatch = useDispatch();
    const {} = useForm<IFilm>()
    const save = (data: IFilm) => {
        dispatch(addFilm({ ...data, id: Date.now() }));
    };

    return (
        <div>
            <h2>AddFilm</h2>
        </div>
    );
});
