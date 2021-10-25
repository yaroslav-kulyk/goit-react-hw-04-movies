import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../services/api-service';

export default function TrendingView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
