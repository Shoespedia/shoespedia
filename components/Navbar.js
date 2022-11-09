import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <HStack
      justifyContent='space-between'
      px={{ base: '0', md: '10vw' }}
      shadow='md'
      mb='100px'
      py='8px'
    >
      <Image src='assets/logo.png' borderRadius='50%' width='64px' />
      <HStack spacing={8}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Products</Text>
        <Text>Login</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
