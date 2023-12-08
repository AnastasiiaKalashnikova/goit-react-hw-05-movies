import { Link } from 'react-router-dom';

export const TopList = ({ movieList }) => {
  return (
    <div>
      <h2> Trending today</h2>
      <ul>
        {movieList.map(movie => {
          return (
            <li>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
