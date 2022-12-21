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
  const [search, setSearch] = useState('');

  let client = require('contentful').createClient({
    space: 'ylcybvya0rbg',
    accessToken: 'kmsgH9o1DHUGqrIKv6i4urV88gw7_gS2iXBbfGkzitI',
  });

  const getData = async (filter) => {
    if (filter === 'all') {
      let data = await client.getEntries({
        content_type: 'shoe',
      });
      if (!search) return data.items;
      else {
        return data.items.filter((item) =>
          item.fields.name.toLowerCase().includes(search.toLowerCase())
        );
      }
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
        setFilteredProducts(data);
      });
    } else {
      setMounted(true);
    }
  }, [filter, search]);

  return (
    <Page title='Products'>
      <Navbar noMb />
      <Stack direction={{ base: 'column', lg: 'row' }} minH='100vh'>
        <Sidebar setFilter={setFilter} setSearch={setSearch} />
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
