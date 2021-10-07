import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors } from "redux/phonebook";
import { contactsOperations } from "redux/phonebook";

import { yupContact } from "validation/yup";

import { WrapperForm, CssTextField } from "./Form.styles";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormContacts() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    if (
      contacts.find(
        (contact) => values.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts.`);
      setSubmitting(false);
      return;
    }
    dispatch(contactsOperations.addContact(values));
    resetForm();
    setSubmitting(false);
  };

  return (
    <WrapperForm>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={yupContact}
        onSubmit={handleSubmitForm}
      >
        {({ handleSubmit }) => (
          <Form>
            <Field
              as={CssTextField}
              variant="outlined"
              name="name"
              label="Name"
              color="secondary"
              focused
              style={{ marginBottom: "20px", width: "250px" }}
            />
            <br />
            <Field
              as={CssTextField}
              variant="outlined"
              type="tel"
              placeholder="000-000-0000"
              label="Number"
              name="number"
              color="secondary"
              focused
              style={{ marginBottom: "20px", width: "250px" }}
            />
            <br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </WrapperForm>
  );
}

export default FormContacts;
