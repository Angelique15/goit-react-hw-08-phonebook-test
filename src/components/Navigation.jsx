import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Text } from '@chakra-ui/react'; // Importa los componentes de Chakra UI
import styled from 'styled-components';

const NavigationWrapper = styled.nav``; // Puedes eliminar los estilos CSS aquí

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 15px;

  &.active {
    font-weight: bold;
    color: #541717; 
  }
`; // Puedes eliminar los estilos CSS aquí

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationWrapper>
      <List display="flex" gap="30px"> {/* Utiliza el componente List de Chakra UI */}
        <ListItem>
          <StyledNavLink to="/">
            <Text textTransform="uppercase" fontFamily="inherit" letterSpacing="4px">
              Home
            </Text>
          </StyledNavLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            <StyledNavLink to="/contacts">
              <Text textTransform="uppercase" fontFamily="inherit" letterSpacing="4px">
                Contacts
              </Text>
            </StyledNavLink>
          </ListItem>
        )}
        <ListItem>
          <StyledNavLink to="/register">
            <Text textTransform="uppercase" fontFamily="inherit" letterSpacing="4px">
              Register
            </Text>
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/login">
            <Text textTransform="uppercase" fontFamily="inherit" letterSpacing="4px">
              Login
            </Text>
          </StyledNavLink>
        </ListItem>
      </List>
    </NavigationWrapper>
  );
};

export default Navigation;



