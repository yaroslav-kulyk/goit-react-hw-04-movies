import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const loaderRoot = document.querySelector('#loader-root');

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense
        fallback={createPortal(
          <div className="loader">
            <Loader type="TailSpin" color="#e72962" height={100} width={100} />
          </div>,
          loaderRoot,
        )}
      >
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
      </Suspense>
    </Container>
  );
}

export default App;
