import { Field, Form, Formik } from 'formik';

export const SearchForm = ({ handler }) => {
  return (
    <div>
      <Formik
        initialValues={{
          searchMovie: '',
        }}
        onSubmit={(values, actions) => {
          handler(values.searchMovie);
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
