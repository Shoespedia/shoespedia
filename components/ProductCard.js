import { Box, Button, Heading, Image, Text, Center } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({ img, brand, name, price }) => {
    return (
        <Box bg="#FFFFF" px="18px" py="35px" w="350px" textAlign="center">
            <Image src={img} />
            <Heading fontSize="28px" mt="8px">{brand}</Heading>
            <Text fontSize='16px' mt="8px"> {brand} {name} {price}</Text>
        </Box>
    )
}

export default ProductCard;

