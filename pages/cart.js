import { Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import Page from '../components/Page';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <Page title='Cart'>
      <Navbar />
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        minH='100vh'
        mx={{ md: 8 }}
      >
        <Cart />
      </Stack>
    </Page>
  );
};

export default CartPage;
