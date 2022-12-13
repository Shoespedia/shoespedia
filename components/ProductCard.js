import { Heading, Image, Text, Stack } from '@chakra-ui/react';
import formatPrice from '../utils/formatPrice';
import React from 'react';
import { useRouter } from 'next/router';

const ProductCard = ({ img, brand, name, price, id }) => {
  const router = useRouter();
  return (
    <Stack
      bg='#FFF'
      p={4}
      w='280px'
      textAlign='center'
      alignItems='center'
      cursor='pointer'
      onClick={() => router.push(`/products/${id}`)}
    >
      <Image src={img} alt={name} w='200px' />
      <Heading fontSize='28px' mt='8px'>
        {brand}
      </Heading>
      <Text fontSize='16px' mt='8px'>
        {' '}
        {brand} {name} <br /> {formatPrice(price)}
      </Text>
    </Stack>
  );
};

export default ProductCard;
