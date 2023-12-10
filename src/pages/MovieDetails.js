import { getFullInformation } from 'api';
import { Wrapp } from 'components/MovieDetails/StyledMovieDetails';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export const MovieDetails = () => {
  //не працює
  const location = useLocation();
  const locRef = useRef(location);

  //const backLinkRef = useRef(location);

  console.log(location);
  // console.log(backLinkRef.current);
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
  }, [params.movieId]);

  return (
    <div>
      <Link to={locRef.current.state?.from ?? '/'}>Go back</Link>
      <h2>{movieInfo.original_title}</h2>
      <Wrapp>
        <img
          src={`https://www.themoviedb.org/t/p/original${movieInfo.poster_path}`}
          height={600}
        />
        <div>
          <p>Release date: {movieInfo.release_date}</p>
          <p>Rates: {movieInfo.vote_average}</p>
          <p>Overview: {movieInfo.overview}</p>
        </div>
      </Wrapp>
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
