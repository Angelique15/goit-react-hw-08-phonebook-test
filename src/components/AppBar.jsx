import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { getIsLoggedIn, getUser } from '../redux/auth/authSelectors';
import UserMenu from './UserMenu';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';


const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box as="header" bg="#a59292" color="#333" px={4} py={2} maxW="800px" mx="auto">
      <Flex justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link to="/">
          <FontAwesomeIcon icon={faBookOpenReader} size="2x" style={{ marginLeft: '50px' }}/>
        </Link>
        <Navigation />
        {isLoggedIn ? (
          <div>
            <UserMenu />
          </div>
        ) : (
          <div>
            <ChakraLink as={Link} to="/register" color="white" mr={2}>
            </ChakraLink>
            <ChakraLink as={Link} to="/login" color="white">
            </ChakraLink>
          </div>
        )}
      </Flex>
    </Box>
  );
};


export default AppBar;


