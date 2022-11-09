import React from 'react';
import { Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <HStack alignItems='start'>
      <Stack spacing='24px'>
        <Heading fontWeight='bold' fontSize='96px'>
          About Us
        </Heading>
        <Text mt='20px' width='80%'>
          Kami adalah consignment store sepatu nasional yang menyediakan
          informasi penjualan yang dapat di akses di seluruh indonesa dengan
          cepat, mudah, dan dapat di percaya
        </Text>
      </Stack>
      <Image src='assets/shoestore.png' alt='shoestore' />
    </HStack>
  );
};

export default AboutSection;
