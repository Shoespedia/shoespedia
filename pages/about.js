import { Stack } from '@chakra-ui/react';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function Home() {
  return (
    <Page title='Shoespedia'>
      <Navbar />

      <Stack
        spacing='50px'
        px={{ base: '0', md: '10vw' }}
        minH='calc(100vh - 180px)'
      >
        <AboutSection />
      </Stack>
    </Page>
  );
}
