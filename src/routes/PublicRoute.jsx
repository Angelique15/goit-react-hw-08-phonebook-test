import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/authSelectors';

const PublicRoute = ({ element }) => {
  const isLoggedIn = useSelector(getIsLoggedIn); // Usa la función importada

  if (isLoggedIn) {
    // If the user is already logged in, redirect to the contacts page
    return <Navigate to="/contacts" />;
  }

  return element;
};

export default PublicRoute;

