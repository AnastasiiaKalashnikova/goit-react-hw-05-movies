import { getMovieByInput } from 'api';
import { SearchForm } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import { TopList } from 'components/TopList/TopList';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const input = params.get('query') || '';

  const onSubmit = value => {
    setParams({ query: value });
  };

  useEffect(() => {
    if (!input.trim()) return;
    async function getMovies() {
      try {
        setIsLoading(true);

        const moviesByInput = await getMovieByInput(input);
        setMoviesList(moviesByInput.results);
      } catch {
        return toast.error('Something went wrong... Try again!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [input]);

  return (
    <>
      <Loader statuse={isLoading} />
      <SearchForm handler={onSubmit} />
      {moviesList.length !== 0 && <TopList movieList={moviesList} />}
    </>
  );
};

export default Movies;
