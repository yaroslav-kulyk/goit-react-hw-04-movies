const API_KEY = '838a1c7309b989baab596bfe84b6d2d8';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchTrending() {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const url = `${BASE_URL}/trending/movie/day?${searchParams}`;
  return fetch(url).then(r => r.json());
}

function fetchMovieById(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(r =>
    r.json(),
  );
}

function fetchMovieByQuery(query) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query,
    include_adult: false,
  });

  const url = `${BASE_URL}/search/movie?${searchParams}`;

  return fetch(url).then(response => response.json());
}

function fetchMovieCredits(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(
    response => response.json(),
  );
}

function fetchMovieReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    response => response.json(),
  );
}

async function getConfig() {
  const response = await fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`);
  return await response.json();
}

export {
  fetchTrending,
  fetchMovieById,
  fetchMovieByQuery,
  fetchMovieCredits,
  fetchMovieReviews,
  getConfig,
};
