import { useState, useEffect } from 'react';
import { Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import * as moviesAPI from '../services/api-service';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
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
          <hr />

          <NavLink exact to={`${url}/cast`}>
            Cast
          </NavLink>

          <NavLink exact to={`${url}/reviews`}>
            Reviews
          </NavLink>

          <Route path={`${url}/cast`} exact>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${url}/reviews`} exact>
            <Reviews movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}
