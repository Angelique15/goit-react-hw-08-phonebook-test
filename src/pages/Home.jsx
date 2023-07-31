// pages/Home.jsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';


const Home = () => {
  return (
       <Box maxW="800px" minH="500px" mx="auto" bg="#fff" borderRadius="md" boxShadow="xl" p="6" rounded="md" textAlign="center" // Alineación horizontal al centro
        justifyContent="center" // Alineación vertical al centro
        alignItems="center"  // Ruta de la imagen de fondo
      paddingTop="70px" marginTop="-20px"> 
        <Heading
          as="h1"
          textAlign="center"
          fontSize="7xl"
          textTransform="uppercase"
          letterSpacing="2px"
          fontFamily="Helvetica Neue"
          color="#a59292"
        mb="20px"
        fontStyle="italic"
        fontWeight= "bold"
        >
          <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'teal' }}>Welcome</span> to Phonebook!
        </Heading>
      <Heading
        as="h2"
        textAlign="center"
        fontSize="3x1"
        color="teal.500"
        fontFamily="serif"
        marginTop="70px"
      >
        Stay Connected with Your Contacts!
      </Heading>
    </Box>
  );
};

export default Home;

