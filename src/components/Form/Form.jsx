import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [params, setParams] = useSearchParams();
  return (
    <div>
      <Formik
        initialValues={{
          searchMovie: '',
        }}
        onSubmit={async (values, actions) => {
          setParams({ query: values.searchMovie });
          actions.resetForm();
          console.log(params);
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
