import { Link } from 'react-router-dom';

export const TopList = ({ movieList, location }) => {
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
