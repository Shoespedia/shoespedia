import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <Box>
      <SimpleGrid
        spacing={8}
        columns={{ base: 1, md: 2, xl: 3 }}
        px={{ base: '0', md: '10vw' }}
        mt='30px'
      >
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.sys.id}
              id={product.sys.id}
              img={product.fields.images.url[0]}
              brand={product.fields.brand}
              name={product.fields.name}
              price={product.fields.price}
            />
          ))
        ) : (
          <Text>Belum ada produk.</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
