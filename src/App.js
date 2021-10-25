import { Switch, Route } from 'react-router';
import * as moviesAPI from './services/api-service';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import TrendingView from './views/HomePage';
import MovieDetailsView from './views/MovieDetailsPage';
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
          <TrendingView />
        </Route>

        <Route path="/movies/" exact>
          <p>It's a movies page</p>
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
