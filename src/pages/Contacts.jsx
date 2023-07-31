import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts, selectLoading, selectError } from '../redux/contacts/contactsSelectors';
import styled from 'styled-components';

const ContactsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
`;

const Contacts = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ContactsWrapper>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </ContactItem>
      ))}
    </ContactsWrapper>
  );
};

export default Contacts;




