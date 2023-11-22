import { Formik, Field, Form } from 'formik';

// це може бути просто компонент окремий
export const HomePage = () => {
  return (
    <div>
      HOME
      <Formik
        initialValues={{
          searchMovie: '',
        }}
        onSubmit={async values => {
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
