import { Field, Form, Formik } from 'formik';

export const Movies = () => {
  return (
    <div>
      MOVIES
      <Formik
        initialValues={{
          searchMovie: '',
        }}
        onSubmit={async values => {
          //actions.resetForm();
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
