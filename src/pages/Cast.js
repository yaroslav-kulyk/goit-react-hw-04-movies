import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCredits } from '../services/api-service';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <>
      {credits && (
        <div className={s.castContainer}>
          <ul className={s.cast}>
            {credits.cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  alt={actor.name}
                />
                {actor.name} as {actor.character}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
