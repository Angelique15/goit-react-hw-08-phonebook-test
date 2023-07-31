// App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; // Importa el ChakraProvider
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from './AppBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';
import styled from 'styled-components';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';


const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
 
`;

const App = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);

  if (isLoading) {
    // Puedes renderizar un spinner de carga aquí mientras esperas los datos del usuario
    return <div>Loading...</div>;
  }

  return (
    <>
      <ChakraProvider>
      <AppBar />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<PublicRoute restricted={false} element={<Home />} />} />
          <Route path="register" element={<PublicRoute restricted={true} redirectTo="/contacts" element={<Register />} />} />
          <Route path="login" element={<PublicRoute restricted={true} redirectTo="/contacts" element={<Login />} />} />
          <Route path="contacts" element={<PrivateRoute element={<Contacts />} />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Ruta de fallback */}
        </Routes>
        </AppWrapper>
        </ChakraProvider>
    </>
  );
};

export default App;




