import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

import { yup } from "validation/yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

import { FormTitle, Block, Container } from "../App.styles";

function RegisterView() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Block>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={yup}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(authOperations.register(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormTitle>Registration</FormTitle>
              <Field
                component={TextField}
                name="name"
                type="name"
                label="Name"
                margin="normal"
                style={{ width: "250px" }}
              />
              <br />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                margin="normal"
                style={{ width: "250px" }}
              />
              <br />
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                margin="normal"
                style={{ width: "250px" }}
              />
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "20px" }}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Block>
    </Container>
  );
}

export default RegisterView;
