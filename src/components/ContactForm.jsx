import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact, deleteContact } from '../redux/contacts/contactsSlice';
import { Input, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'; // Import Chakra UI components

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Index of the contact being edited
  const contacts = useSelector((state) => state.contacts);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // If editIndex is not null, update the contact at the given index
      dispatch(updateContact({ index: editIndex, name, phone }));
      setEditIndex(null);
    } else {
      // If editIndex is null, add a new contact
      dispatch(addContact({ name, phone }));
    }

    // Clear the form fields
    setName('');
    setPhone('');
  };

  const handleEdit = (index) => {
    // Set the form fields with the data of the contact being edited
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Dispatch the deleteContact action to delete the contact at the given index
    dispatch(deleteContact(index));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <Input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <Button type="submit">
          {editIndex !== null ? 'Update Contact' : 'Add Contact'}
        </Button>
      </form>
      <Table mt="4">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contacts.map((contact, index) => (
            <Tr key={index}>
              <Td>{contact.name}</Td>
              <Td>{contact.phone}</Td>
              <Td>
                <Button colorScheme="blue" mr="2" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button colorScheme="red" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ContactForm;

