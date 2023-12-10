import { AppLayout } from 'pages/AppLayout';
//import { HomePage } from 'pages/HomePage';
//import { MovieDetails } from 'pages/MovieDetails';
//import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
