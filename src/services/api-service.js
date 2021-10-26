const API_KEY = '838a1c7309b989baab596bfe84b6d2d8';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
  );
}

function fetchMovieByQuery(query) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query,
    include_adult: false,
  });

  return fetchWithErrorHandling(`${BASE_URL}/search/movie?${searchParams}`);
}

function fetchMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
}

function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
}

// function fetchTrending() {
//   const searchParams = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const url = `${BASE_URL}/trending/movie/day?${searchParams}`;
//   return fetch(url).then(r => r.json());
// }

// function fetchMovieById(id) {
//   return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(r =>
//     r.json(),
//   );
// }

// function fetchMovieByQuery(query) {
//   const searchParams = new URLSearchParams({
//     api_key: API_KEY,
//     query,
//     include_adult: false,
//   });

//   const url = `${BASE_URL}/search/movie?${searchParams}`;

//   return fetch(url).then(response => response.json());
// }

// function fetchMovieCredits(movieId) {
//   return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(
//     response => response.json(),
//   );
// }

// function fetchMovieReviews(movieId) {
//   return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
//     response => response.json(),
//   );
// }

// async function getConfig() {
//   const response = await fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`);
//   return await response.json();
// }

export {
  fetchTrending,
  fetchMovieById,
  fetchMovieByQuery,
  fetchMovieCredits,
  fetchMovieReviews,
};
