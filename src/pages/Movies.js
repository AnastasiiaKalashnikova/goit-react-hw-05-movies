import { getMovieByInput } from 'api';
import { TopList } from 'components/TopList/TopList';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [params, setParams] = useSearchParams();
  const input = params.get('query');
  const [moviesList, setMoviesList] = useState('');

  return (
    <div>
      MOVIES
      <Formik
        initialValues={{
          searchMovie: input ?? '',
        }}
        onSubmit={async (values, actions) => {
          const moviesByInput = await getMovieByInput(values.searchMovie);
          setMoviesList(moviesByInput.results);
          console.log(moviesByInput.results);
          setParams({ query: values.searchMovie });
          actions.resetForm();
        }}
      >
        <Form>
          <Field id="searchMovie" name="searchMovie" />

          <button type="submit">Search</button>
        </Form>
      </Formik>
      {params.size !== 0 && <TopList movieList={moviesList} />}
    </div>
  );
};
