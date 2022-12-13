import { Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import Page from '../../components/Page';
import ProductDetail from '../../components/ProductDetail';

const ProductDetailPage = ({ product }) => {
  return (
    <Page title='Products'>
      <Navbar noMb />
      <Stack direction={{ base: 'column', lg: 'row' }} minH='100vh'>
        <ProductDetail product={product} />
      </Stack>
    </Page>
  );
};

export async function getServerSideProps(context) {
  let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  let data = await client.getEntries({
    content_type: 'shoe',
    'sys.id': context.params.id,
  });

  return {
    props: {
      product: data.items[0],
    },
  };
}

export default ProductDetailPage;
