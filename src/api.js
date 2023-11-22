const axios = 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=385f1c9d7cd582645a2d157ab40fd9e0';

export const getTopMovies = async () => {
  const topMovies = await axios.get(`trending/movie?${API_KEY}`);
  return topMovies;
};

export const getMovieByInput = async inputValue => {
  const metchedMovies = await axios.get(
    `search/movie?query=${inputValue}&${API_KEY}&page=1`
  );
  return metchedMovies;
};

export const getFullInformation = async movieId => {
  const movieInformation = await axios.get(`movie/${movieId}?${API_KEY}`);
  return movieInformation;
};

export const getCast = async movieId => {
  const movieCast = await axios.get(`movie/${movieId}/credits?${API_KEY}`);
  return movieCast;
};

export const getReviews = async movieId => {
  const movieReviews = await axios.get(
    `movie/${movieId}/reviews?page=1&${API_KEY}`
  );
  return movieReviews;
};
