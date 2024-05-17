import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFilmById, selectFilm } from '../../features/film/filmSlice';
import './style.scss';

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
              <p>{elm.genres?.join(', ')}</p>
              <div>
                <Link to={'/detailsFilms/' + elm.id}>See More</Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  onClick={() => dispatch(deleteFilmById(elm.id))}
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" width={10} height={10}/>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
