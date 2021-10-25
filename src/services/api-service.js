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

async function getConfig() {
  const response = await fetch(`${BASE_URL}/configuration?api_key=${API_KEY}`);
  return await response.json();
}

export { fetchTrending, fetchMovieById, getConfig };

// class ApiService {
//   constructor() {
//     this.query = '';
//     this.period = 'day';
//     this.page = 1;
//   }

//   async getConfig() {
//     const response = await fetch(
//       `${BASE_URL}/configuration?api_key=${API_KEY}`,
//     );
//     return await response.json();
//   }

//   async fetchGenres() {
//     const response = await fetch(
//       `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
//     );
//     return await response.json();
//   }

//   async fetchTrending() {
//     const searchParams = new URLSearchParams({
//       api_key: API_KEY,
//       page: this.page,
//     });

//     const url = `${BASE_URL}/trending/movie/${this.period}?${searchParams}`;

//     const response = await fetch(url);
//     const result = await response.json();

//     this.incrementPage();
//     return result;
//   }

//   async fetchMovieByQuery() {
//     const searchParams = new URLSearchParams({
//       api_key: API_KEY,
//       query: this.query,
//       include_adult: false,
//       page: this.page,
//     });

//     const url = `${BASE_URL}/search/movie?${searchParams}`;

//     const response = await fetch(url);
//     const result = await response.json();

//     this.incrementPage();
//     return result;
//   }

//   async fetchMovieById2(id) {
//     const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
//     return await response.json();
//   }

//   //================= вариант для стягивания чистых жанров в модалку =======================
//   fetchMovieById(id) {
//     return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
//       .then(response => response.json())
//       .then(result => ({
//         ...result,
//         genres: this.getGenres(result),
//       }));
//   }

//   getGenres(result) {
//     let genreArr = result['genres'].map(genre => genre['name']);
//     if (genreArr.length === 0) {
//       return (genreArr = [`Unknown`]);
//     }
//     return genreArr;
//   }
//   //==================== конец ==============================================
//   get searchQuery() {
//     return this.query;
//   }

//   set searchQuery(searchQuery) {
//     this.query = searchQuery;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
