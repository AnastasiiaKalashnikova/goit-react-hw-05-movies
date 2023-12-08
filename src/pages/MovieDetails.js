import { getFullInformation } from 'api';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const params = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    async function getInformation() {
      try {
        const info = await getFullInformation(params.movieId);
        setMovieInfo(info);
      } catch {
      } finally {
      }
    }
    getInformation();
  }, []);

  return (
    <div>
      <a>Go back</a>
      <h2>{movieInfo.original_title}</h2>
      <img
        src={`https://www.themoviedb.org/t/p/original${movieInfo.poster_path}`}
        height={800}
      />
      <p>Release date: {movieInfo.release_date}</p>
      <p>vote average: {movieInfo.vote_average}</p>
      <p>overview: {movieInfo.overview}</p>
      <div>
        <p>Addition information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
