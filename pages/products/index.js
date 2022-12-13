import { Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import ProductList from '../../components/ProductList';
import Sidebar from '../../components/Sidebar';

const Products = ({ products }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [mounted, setMounted] = useState(false);

  let client = require('contentful').createClient({
    space: 'ylcybvya0rbg',
    accessToken: 'kmsgH9o1DHUGqrIKv6i4urV88gw7_gS2iXBbfGkzitI',
  });

  const getData = async (filter) => {
    if (filter === 'all') {
      let data = await client.getEntries({
        content_type: 'shoe',
      });
      return data;
    } else {
      let data = await client.getEntries({
        content_type: 'shoe',
        'fields.brand': filter,
      });
      return data;
    }
  };

  useEffect(() => {
    if (mounted) {
      getData(filter).then((data) => {
        setFilteredProducts(data.items);
      });
    } else {
      setMounted(true);
    }
  }, [filter]);

  return (
    <Page title='Products'>
      <Navbar noMb />
      <Stack direction={{ base: 'column', lg: 'row' }} minH='100vh'>
        <Sidebar setFilter={setFilter} />
        <ProductList products={filteredProducts} />
      </Stack>
    </Page>
  );
};

export async function getServerSideProps() {
  let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  let data = await client.getEntries({
    content_type: 'shoe',
  });

  return {
    props: {
      products: data.items,
    },
  };
}

export default Products;
