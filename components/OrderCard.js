import { HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import formatPrice from '../utils/formatPrice';

const OrderCard = ({ product }) => {
  return (
    <HStack alignItems='start' border='1px solid black' px={8} py={4}>
      <Image src={product.images.url[0]} alt={product.name} w='100px' />
      <Stack>
        <HStack alignItems='space-between'>
          <Text fontSize='xs'>{product.name}</Text>
          <Text fontSize='xs'>{formatPrice(product.price)}</Text>
        </HStack>
        <Text fontSize='xs'>Size: {product.size}</Text>
      </Stack>
    </HStack>
  );
};

export default OrderCard;
