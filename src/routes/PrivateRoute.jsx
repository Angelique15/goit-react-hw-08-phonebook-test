import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRoute = ({ element }) => {
  const isLoggedIn = useSelector(getIsLoggedIn); // Usa la función importada

  if (!isLoggedIn) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;

