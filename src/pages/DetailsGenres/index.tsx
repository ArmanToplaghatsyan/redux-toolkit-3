import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectGenres } from '../../features/genre/genreSlice';
import { IFilm, IGenre } from '../../type/type';
import { selectFilm } from '../../features/film/filmSlice';
import './style.scss';

export const DetailsGenres: React.FC = React.memo((): JSX.Element => {
  const { name } = useParams();
  console.log(name);
  const dispatch = useDispatch();
  const { films } = useSelector(selectFilm);

  const [clone, setClone] = useState<IFilm[]>([]);

  useEffect(() => {
    if (name) setClone([...films.filter((elm) => elm.genres.includes(name))]);
  }, [name]);

  console.log(clone);

  return (
    <div className="details">
      {clone.map((elm) => {
        return (
          <div key={elm.id}>
            <div>
              <h3>Name - {elm.name}</h3>
              <h4>Genres - {elm.genres}</h4>
              <p>Feedback - {elm.feedback}</p>
            </div>
            <img src={elm.img} width={500} height={600} />
          </div>
        );
      })}
    </div>
  );
});
