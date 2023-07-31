import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from '../redux/contacts/contactsSelectors';
import { Box, List, ListItem, Text } from '@chakra-ui/react'; // Import Chakra UI components

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <Box maxW="600px" mx="auto" p="20px" border="2px solid #ccc" borderRadius="4px" boxShadow="0 0 10px rgba(0, 0, 0, 0.2)">
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} p="5px 0" borderBottom="1px solid #ccc">
            <strong>{contact.name}</strong> - {contact.phone}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactList;

