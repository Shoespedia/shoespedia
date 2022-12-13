import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <Box>
      <SimpleGrid
        spacing={8}
        columns={{ base: 1, md: 2, xl: 3 }}
        px={{ base: '0', md: '10vw' }}
        mt='30px'
      >
        <ProductCard
          img='assets/product1.png'
          brand='Jordan'
          name="Air Jordan High OG 'Taxi'"
          price='$255'
        />
        <ProductCard
          img='assets/product2.png'
          brand='Jordan'
          name="Air Jordan Low XD  'Buzz'"
          price='$290'
        />
        <ProductCard
          img='assets/product3.png'
          brand='Jordan'
          name='Essential “ White - Off “'
          price='$475'
        />
        <ProductCard
          img='assets/product4.png'
          brand='Jordan'
          name="Air Jordan High OG 'Taxi'"
          price='$255'
        />
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
