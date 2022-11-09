import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

const LandingSection = () => {
  return (
    <HStack
      alignItems='start'
      flexDirection={{ base: 'column-reverse', xl: 'row' }}
    >
      <Stack spacing='24px' alignItems={{ base: 'center', xl: 'flex-start' }}>
        <Heading fontWeight='bold' fontSize={{ base: '64px', xl: '96px' }}>
          Shoespedia
        </Heading>
        <Text mt='20px' width='80%'>
          Consignment store sepatu nasional yang menyediakan informasi penjualan
          yang dapat di akses di seluruh indonesa dengan cepat, mudah, dan dapat
          di percaya
        </Text>
        <Button
          width={{ base: '60%', xl: '20%' }}
          mt='20px'
          bg='#D9D9D9'
          borderRadius='100px'
          fontWeight='bold'
        >
          Belanja
        </Button>
      </Stack>
      <Box>
        <Image src='assets/heroshoe.png' alt='shoes' />
      </Box>
    </HStack>
  );
};

export default LandingSection;
