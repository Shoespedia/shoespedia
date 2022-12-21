import Page from '../components/Page';
import LandingSection from '../components/LandingSection';
import { Box, Center, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import SellerCard from '../components/SellerCard';
import ProductCard from '../components/ProductCard';
import ProductList from '../components/ProductList';

export default function Home({ products }) {
  return (
    <Page title='Shoespedia'>
      <Navbar />

      <Stack spacing='50px' px={{ base: '0', md: '10vw' }}>
        <LandingSection />
        <HStack justifyContent='space-around' px={{ base: '0', md: '10vw' }}>
          <SellerCard
            img='assets/sellercard.png'
            title='Seller'
            text='Titipkan sepatumu untuk dijual keseluruh indonesia.'
            button='Titip'
            url='/about'
          />
          <SellerCard
            img='assets/buyercard.png'
            title='Buyer'
            text='Lihat dan Amati Sepatu Terbaru dari Consign ini!'
            button='Beli'
            url='/products'
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
        <Center>
          <ProductList products={products} />
        </Center>
      </Stack>
    </Page>
  );
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

export async function getServerSideProps() {
  let data = await client.getEntries({
    content_type: 'shoe',
    limit: 6,
  });

  return {
    props: {
      products: data.items,
    },
  };
}
