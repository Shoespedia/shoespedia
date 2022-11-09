import Page from '../components/Page';
import LandingSection from '../components/LandingSection';
import { Box, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import SellerCard from '../components/SellerCard';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <Page title='Shoespedia'>
      <Navbar />

      <Stack spacing='50px' px={{ base: '0', md: '10vw' }}>
        <LandingSection />
        <HStack justifyContent='space-around' px={{ base: '0', md: '10vw' }}>
          <SellerCard
            img='assets/sellercard.png'
            title='Seller'
            text='Titipkan sepatumu untuk dijual keseluruh indonesia, menjangkau keseluruhan dan terjaga.'
            button='Titip'
          />
          <SellerCard
            img='assets/buyercard.png'
            title='Buyer'
            text='Lihat dan Amati Sepatu Terbaru dari Consign ini!'
            button='Beli'
          />
        </HStack>
      </Stack>

      <Stack mt='50px'>
        <HStack
          py={4}
          px={8}
          bg='black'
          justifyContent='center'
          position='relative'
        >
          <Text color='white'>Produk</Text>
          <Text color='#F9C23D' position='absolute' right='20'>
            Produk Lainnya {'>>>'}
          </Text>
        </HStack>
        <SimpleGrid
          spacing={0}
          columns={{ base: 1, md: 3, xl: 4 }}
          px={{ base: '0', md: '10vw' }}
        >
          <ProductCard
            img='assets/product1.png'
            brand='Jordan'
            name="Air Jordan High OG 'Taxi'"
            price='$255'
          />
          <ProductCard
            img='assets/product2.png'
            brand='Jordan'
            name="Air Jordan Low XD  'Buzz'"
            price='$290'
          />
          <ProductCard
            img='assets/product3.png'
            brand='Jordan'
            name='Essential “ White - Off “'
            price='$475'
          />
          <ProductCard
            img='assets/product4.png'
            brand='Jordan'
            name="Air Jordan High OG 'Taxi'"
            price='$255'
          />
        </SimpleGrid>
      </Stack>
    </Page>
  );
}
