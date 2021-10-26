import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../services/api-service';

export default function Cast({ movieId }) {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul>
          {credits.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`http://image.tmdb.org/t/p/w45/${actor.profile_path}`}
                alt={actor.name}
              />
              {actor.name} as {actor.character}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
