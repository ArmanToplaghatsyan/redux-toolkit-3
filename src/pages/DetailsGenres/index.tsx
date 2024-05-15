import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectGenres } from "../../features/genre/genreSlice";
import { IFilm, IGenre } from "../../type/type";

export const DetailsGenres: React.FC = React.memo((): JSX.Element => {

const {id} = useParams();
const navigate = useNavigate();
console.log(id);
const [genre, setGenre] = useState<IGenre>({} as IGenre)
const dispatch = useDispatch();

console.log(genre);


    return (
        <div>
            <h2>{genre.name}</h2>
        </div>
    );
});
