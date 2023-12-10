import { getTopMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import { TopList } from 'components/TopList/TopList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const fetchedMovies = await getTopMovies();
        setTopMovies(fetchedMovies.results);
      } catch {
        return toast.error('Something went wrong... Try again!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <>
      <Loader statuse={isLoading} />
      <h2> Trending today</h2>
      <TopList movieList={topMovies} />
    </>
  );
};

export default HomePage;
