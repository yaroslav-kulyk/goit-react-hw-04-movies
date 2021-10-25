import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/api-service';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <span>{movie.vote_average}</span>
          <p>Genres: {movie.genres.map(genre => genre.name)}</p>
        </>
      )}
    </>
  );
}
