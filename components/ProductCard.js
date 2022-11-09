import { Box, Button, Heading, Image, Text, Center } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ img, brand, name, price }) => {
  return (
    <Box bg='#FFF' px='18px' py='35px' w='350px' textAlign='center'>
      <Image src={img} alt={name} />
      <Heading fontSize='28px' mt='8px'>
        {brand}
      </Heading>
      <Text fontSize='16px' mt='8px'>
        {' '}
        {brand} {name} <br /> {price}
      </Text>
    </Box>
  );
};

export default ProductCard;
