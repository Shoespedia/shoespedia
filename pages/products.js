import { Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import Page from '../components/Page';
import ProductList from '../components/ProductList';
import Sidebar from '../components/Sidebar';

const Products = () => {
  return (
    <Page title='Products'>
      <Navbar noMb />
      <Stack direction={{ base: 'column', lg: 'row' }}>
        <Sidebar />
        <ProductList />
      </Stack>
    </Page>
  );
};

export default Products;
