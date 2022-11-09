import React from 'react';
import { Button, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <HStack
      alignItems='center'
      justifyContent='center'
      flexDirection={{ base: 'column-reverse', xl: 'row' }}
    >
      <Stack spacing='24px' textAlign={{ base: 'center', xl: 'left' }}>
        <Heading
          fontWeight='bold'
          fontSize={{ base: '64px', xl: '64px' }}
          mt={{ base: '20px', xl: '0px' }}
        >
          About Us
        </Heading>
        <Text mt='20px' width={{ base: '100%', xl: '80%' }}>
          Kami adalah consignment store sepatu nasional yang menyediakan
          informasi penjualan yang dapat di akses di seluruh indonesa dengan
          cepat, mudah, dan dapat di percaya.
          <br />
          <br />
          Kami menyediakan berbagai macam sepatu dengan kualitas terbaik dan
          harga yang terjangkau, sebagai seller kami juga menyediakan berbagai
          macam sepatu dengan harga yang terjangkau dan kualitas terbaik.
        </Text>
      </Stack>
      <Image src='assets/shoestore.png' alt='shoestore' />
    </HStack>
  );
};

export default AboutSection;
