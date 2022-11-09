import React from 'react';
import { Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

const LandingSection = () => {
  return (
    <HStack alignItems='start'>
      <Stack spacing='24px'>
        <Heading fontWeight='bold' fontSize='96px'>
          Shoespedia
        </Heading>
        <Text mt='20px' width='80%'>
          Consignment store sepatu nasional yang menyediakan informasi penjualan
          yang dapat di akses di seluruh indonesa dengan cepat, mudah, dan dapat
          di percaya
        </Text>
        <Button
          width='20%'
          mt='20px'
          bg='#D9D9D9'
          borderRadius='100px'
          fontWeight='bold'
        >
          Belanja
        </Button>
      </Stack>
      <Image src='assets/heroshoe.png' />
    </HStack>
  );
};

export default LandingSection;
