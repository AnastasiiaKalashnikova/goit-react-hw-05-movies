import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=3ba855b17ad290e76ce8340a960fb4fb';

export const getTopMovies = async () => {
  const topMovies = await axios.get(`trending/movie/week?${API_KEY}`);
  return topMovies.data;
};

export const getMovieByInput = async inputValue => {
  console.log(inputValue);
  const metchedMovies = await axios.get(
    `search/movie?query=${inputValue}&${API_KEY}&page=1`
  );
  return metchedMovies.data;
};

export const getFullInformation = async movieId => {
  const movieInformation = await axios.get(`movie/${movieId}?${API_KEY}`);
  return movieInformation.data;
};

export const getCast = async movieId => {
  const movieCast = await axios.get(`movie/${movieId}/credits?${API_KEY}`);
  return movieCast.data;
};

export const getReviews = async movieId => {
  const movieReviews = await axios.get(
    `movie/${movieId}/reviews?page=1&${API_KEY}`
  );
  return movieReviews.data;
};
