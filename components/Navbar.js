import { HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = ({ noMb }) => {
  return (
    <HStack
      justifyContent='space-between'
      px={{ base: '20px', md: '10vw' }}
      shadow='md'
      mb={noMb ? '0' : '100px'}
      h='80px'
    >
      <Image src='assets/logo.png' borderRadius='50%' width='64px' />
      <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
        <Link href='/'>
          <a>
            <Text>Home</Text>
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <Text>About</Text>
          </a>
        </Link>
        <Link href='/products'>
          <a>
            <Text>Products</Text>
          </a>
        </Link>
        <Link href='/login'>
          <a>
            <Text>Login</Text>
          </a>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Navbar;
