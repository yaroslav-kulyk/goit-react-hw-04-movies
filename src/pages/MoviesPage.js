import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import * as moviesAPI from '../services/api-service';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    moviesAPI.fetchMovieByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmit={setSearchQuery} />

      {movies && (
        <div>
          <ul>
            {movies.results.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
