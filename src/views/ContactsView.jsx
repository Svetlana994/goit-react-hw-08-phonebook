import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations } from "redux/phonebook";
import { getLogIn } from "redux/auth/auth-selectors";

import Contacts from "../components/Contacts/Contacts";
import Form from "../components/Form/Form";

function ContactsView() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLogIn);

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <>
      {isLoggedIn && (
        <>
          <Form />
          <Contacts />
        </>
      )}
    </>
  );
}

export default ContactsView;
