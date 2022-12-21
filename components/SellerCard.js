import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const SellerCard = ({ img, title, text, button, url }) => {
  return (
    <Box
      bg='#EEE'
      px='32px'
      py='56px'
      w='350px'
      height='500px'
      onClick={() => (window.location.href = url)}
    >
      <Image src={img} />
      <Heading fontSize='20px' mt='8px'>
        {title}
      </Heading>
      <Text fontSize='14px' colortext='#666A73' mt='12px'>
        {' '}
        {text}
      </Text>
      <Button size='sm' bg='#D9D9D9' borderRadius='100px' mt='8px'>
        {button}
      </Button>
    </Box>
  );
};

export default SellerCard;
