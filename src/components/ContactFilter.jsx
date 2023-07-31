import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsSlice';
import { Input, Button, Flex } from '@chakra-ui/react'; // Import Chakra UI components

const ContactFilter = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Fetch contacts based on the search term
    dispatch(fetchContacts({ searchTerm }));
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Flex alignItems="center">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Contacts..."
          mr="2"
        />
        <Button type="submit" colorScheme="blue">
          Search
        </Button>
      </Flex>
    </form>
  );
};

export default ContactFilter;

