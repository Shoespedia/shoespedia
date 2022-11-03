import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SellerCard = ({ img, title }) => {
    return (
        <Box bg="#EFEEEE" px="32px" py="56px" w="350px">
            <Image src={img} />
            <Heading fontSize="20px" mt="8px">{title}</Heading>
            <Text fontSize='14px' mt="12px" > Titipkan sepatumu untuk dijual keseluruh indonesia, menjangkau keseluruhan dan terjaga.</Text>
            <Button size="sm" bg="#666A73" borderRadius="100px" mt="8px">Titip</Button>
        </Box>
    )
}

export default SellerCard

