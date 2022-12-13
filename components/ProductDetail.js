import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import formatPrice from '../utils/formatPrice';

const ProductDetail = ({ product }) => {
  const sizes = ['38', '39', '40', '41', '42', '43', '44', '45', '46'];
  const [selectedSize, setSelectedSize] = React.useState(null);
  const toast = useToast();
  const handleCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Warning',
        description: 'Tidak ada ukuran yang dipilih',
        status: 'warning',
      });
    } else {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const newCart = [...cart, { ...product.fields, size: selectedSize }];
      localStorage.setItem('cart', JSON.stringify(newCart));
      toast({
        title: 'Success',
        description: 'Produk berhasil ditambahkan ke keranjang',
        status: 'success',
      });
    }
  };

  return (
    <Stack
      alignItems={{ base: 'center', md: 'flex-start' }}
      mt={16}
      mx={{ md: 8 }}
      mb={{ base: 8, md: 0 }}
      spacing={8}
      direction={{ base: 'column', md: 'row' }}
    >
      <Stack width='60%'>
        <Image src={product.fields.images.url[0]} alt={product.fields.name} />
        <SimpleGrid columns={4} spacing={4} mt={4}>
          {product.fields.images.url.slice(1).map((img) => (
            <Image key={img} src={img} alt={product.fields.name} />
          ))}
        </SimpleGrid>
      </Stack>
      <Flex direction='column' pt={{ md: 16 }}>
        <Text color='red.500' fontSize='md' fontWeight='bold'>
          {product.fields.brand}
        </Text>
        <Heading fontSize='3xl'>{product.fields.name}</Heading>
        <Text fontSize='md'>{product.fields.description}</Text>
        <Text fontWeight='bold' fontSize='4xl' mt={16}>
          {formatPrice(product.fields.price)}
        </Text>
        <Select
          variant='filled'
          placeholder='Size'
          mt={8}
          bg='#DBDBDB'
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Select>
        <Button
          variant='solid'
          bg='red.500'
          color='white'
          mt={8}
          py={6}
          onClick={handleCart}
        >
          Add to Cart
        </Button>
      </Flex>
    </Stack>
  );
};

export default ProductDetail;
