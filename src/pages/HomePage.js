import { getTopMovies } from 'api';
import { TopList } from 'components/TopList/TopList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const fetchedMovies = await getTopMovies();
        setTopMovies(fetchedMovies.results);
        console.log(fetchedMovies);
      } catch {
        return toast.error('Something went wrong... Try again!');
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
