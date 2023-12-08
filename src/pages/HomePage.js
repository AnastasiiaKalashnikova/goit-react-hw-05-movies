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
      } catch {
        console.log('error');
      } finally {
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      <h1>HOME</h1>
      <TopList movieList={topMovies} />
    </div>
  );
};
// це може бути просто компонент окремий
