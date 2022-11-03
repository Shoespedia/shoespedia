import Page from '../components/Page';
import LandingSection from '../components/LandingSection';
import SellerCard from '../components/SellerCard';
import { HStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <Page title='Shoespedia'>
      <LandingSection />
      <HStack>
        <SellerCard/>
        <SellerCard/>
      </HStack>
    </Page>
  );
}
