import { Link, useLocation } from 'react-router-dom';

export const TopList = ({ movieList }) => {
  // const location = useLocation(); state={{ from: location }}
  ////  console.log(location);
  console.log(movieList);
  return (
    <div>
      <h2> Trending today</h2>
      <ul>
        {movieList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
