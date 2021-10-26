import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/api-service';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));

const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);

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

          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path={`${url}/cast`} exact>
              <Cast movieId={movieId} />
            </Route>

            <Route path={`${url}/reviews`} exact>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
