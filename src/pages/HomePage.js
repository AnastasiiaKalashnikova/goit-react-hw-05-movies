import { getTopMovies } from 'api';
import { TopList } from 'components/TopList/TopList';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const fetchedMovies = await getTopMovies();
        setTopMovies(fetchedMovies.results);
        console.log(fetchedMovies);
      } catch {
        console.log('fetchedMovies');
      } finally {
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      <h2> Trending today</h2>
      <TopList movieList={topMovies} />
    </div>
  );
};
