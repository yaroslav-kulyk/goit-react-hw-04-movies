import { Switch, Route, Redirect } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './App.css';

function App() {
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

        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default App;
