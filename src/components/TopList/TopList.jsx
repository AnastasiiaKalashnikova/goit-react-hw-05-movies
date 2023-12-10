import { Link, useLocation } from 'react-router-dom';

export const TopList = ({ movieList, location }) => {
  // const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {movieList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
