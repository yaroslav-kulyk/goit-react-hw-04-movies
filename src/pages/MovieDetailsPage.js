import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as moviesAPI from '../services/api-service';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));

const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button type="button" onClick={onGoBack} className={s.button}>
        Go back
      </button>
      {movie && (
        <>
          <div className={s.movieCard}>
            <img
              src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
              className={s.moviePoster}
            />
            <div className={s.movieInfo}>
              <h2 className={s.movieTitle}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <span>Rating: {movie.vote_average}</span>
              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <h3>Genres</h3>
              <p>
                {movie.genres.map((genre, index) => (
                  <span key={index} className={s.movieGenres}>
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <hr />
          <h3>Additional Info</h3>

          <NavLink
            exact
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
            className={s.credits}
          >
            Cast
          </NavLink>

          <NavLink
            exact
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
            className={s.credits}
          >
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
