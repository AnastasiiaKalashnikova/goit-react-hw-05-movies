import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [_, setParams] = useSearchParams();
  return (
    <div>
      <Formik
        initialValues={{
          searchMovie: '',
        }}
        onSubmit={async (values, actions) => {
          setParams({ query: values.searchMovie });
          actions.resetForm();
        }}
      >
        <Form>
          <Field id="searchMovie" name="searchMovie" />

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
