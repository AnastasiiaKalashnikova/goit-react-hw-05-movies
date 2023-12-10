import { getMovieByInput } from 'api';
import { SearchForm } from 'components/Form/Form';
import { TopList } from 'components/TopList/TopList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [params] = useSearchParams();
  const input = params.get('query');
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function getMovies() {
      try {
        const moviesByInput = await getMovieByInput(input);
        setMoviesList(moviesByInput.results);
      } catch {}
    }
    getMovies();
  }, [input]);

  return (
    <div>
      <SearchForm />
      {params.size !== 0 && (
        <TopList movieList={moviesList} location={location} />
      )}
    </div>
  );
};
