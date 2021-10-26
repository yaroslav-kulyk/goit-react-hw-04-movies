import { Switch, Route } from 'react-router';
import * as moviesAPI from './services/api-service';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './App.css';

function App() {
  moviesAPI.fetchTrending().then(console.log);
  moviesAPI.fetchMovieById(385128).then(console.log);
  moviesAPI.getConfig().then(console.log);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies/" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
