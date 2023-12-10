import { getFullInformation } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Wrapp } from 'components/MovieDetails/StyledMovieDetails';
import { Suspense, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

const MovieDetails = () => {
  //не працює
  const location = useLocation();
  const locRef = useRef(location);

  const { movieId } = useParams('');
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getInformation() {
      try {
        setIsLoading(true);

        const info = await getFullInformation(movieId);
        setMovieInfo(info);
      } catch {
        return toast.error('Something went wrong... Try again!');
      } finally {
        setIsLoading(false);
      }
    }
    getInformation();
  }, [movieId]);

  return (
    <>
      <Loader statuse={isLoading} />
      <Link to={locRef.current.state?.from ?? '/'}>Go back</Link>
      <h2>{movieInfo.original_title}</h2>
      <Wrapp>
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
              : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
          }
          alt="poster"
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
