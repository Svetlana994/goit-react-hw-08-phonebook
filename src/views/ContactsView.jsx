import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations } from "redux/phonebook";
import { getLogIn } from "redux/auth/auth-selectors";

import Contacts from "../components/Contacts/Contacts";
import Form from "../components/Form/Form";

import { Container } from "../App.styles";

function ContactsView() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLogIn);

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <div>
      {isLoggedIn && (
        <Container
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <Form />
          <Contacts />
        </Container>
      )}
    </div>
  );
}

export default ContactsView;
