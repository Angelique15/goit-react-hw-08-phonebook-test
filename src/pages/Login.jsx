import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/auth/authSlice';
import { Box, Heading, Input, Button } from '@chakra-ui/react'; 
import { getIsLoggedIn } from '../redux/auth/authSelectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    // Puedes agregar lógica adicional aquí, como redirigir después del inicio de sesión.
  };

  return (
    <Box maxW="600px" mx="auto" p="20px" border="2px solid #ccc" borderRadius="4px" boxShadow="0 0 10px rgba(0, 0, 0, 0.2)">
      <Heading as="h1" textAlign="center" mb="20px" fontFamily= "serif" color="#8B7355" letterSpacing="2px">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" mt="10px" colorScheme="teal" width= "10em" cursor= "pointer">
          Login
        </Button>
      </form>
    </Box>
  );
};

const Login = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <div>You are already logged in.</div> : <LoginForm />;
};

export default Login;




