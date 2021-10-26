import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import * as moviesAPI from '../services/api-service';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  moviesAPI.getConfig().then(console.log);

  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  const onFormSubmit = query => {
    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    moviesAPI.fetchMovieByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />

      {movies && (
        <div>
          <ul>
            {movies.results.map(movie => (
              <li key={movie.id}>
                <Link to={`${url}/${movie.id}`}>
                  {/* <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.moviePoster}
                  /> */}
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
