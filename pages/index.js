import Page from '../components/Page';
import LandingSection from '../components/LandingSection';
import SellerCard from '../components/SellerCard';
import ProductCard from '../components/ProductCard';
import { HStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Page title='Shoespedia'>
      <LandingSection />
      <HStack>
        <SellerCard img="assets/sellercard.png" title="Seller" text="Titipkan sepatumu untuk dijual keseluruh indonesia, menjangkau keseluruhan dan terjaga." button="Titip"/>
        <SellerCard img="assets/buyercard.png" title="Buyer" text="Lihat dan Amati Sepatu Terbaru dari Consign ini!" button="Beli"/>
      </HStack>
      <HStack>
        <ProductCard img="assets/product1.png" brand="Jordan" name="Air Jordan High OG 'Taxi'" price="$255"/>
        <ProductCard img="assets/product2.png" brand="Jordan" name="Air Jordan Low XD  'Buzz'"  price="$290"/>
        <ProductCard img="assets/product3.png" brand="Jordan" name="Essential “ White - Off “" price="$475"/>
        <ProductCard img="assets/product4.png" brand="Jordan" name="Air Jordan High OG 'Taxi'" price="$255"/>
      </HStack>
    </Page>
  );
}
