import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError } from "../redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";

import { yup } from "validation/yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormTitle, Block, Container } from "../App.styles";

function LoginView() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getError);

  const notify = () => toast("Неверный пароль!");

  useEffect(() => {
    if (errorMessage) {
      notify();
    }
  }, [errorMessage]);

  return (
    <Container>
      <Block>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(authOperations.logIn(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormTitle>Login</FormTitle>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                margin="normal"
                style={{
                  width: "250px",
                }}
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
                disabled={isSubmitting}
                type="submit"
                style={{ marginTop: "20px", width: "200px" }}
              >
                Log in
              </Button>
              <ToastContainer />
            </Form>
          )}
        </Formik>
      </Block>
    </Container>
  );
}

export default LoginView;
