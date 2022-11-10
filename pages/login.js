import { Center, Stack } from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Page from '../components/Page';

export default function Home() {
    return (
        <Page title='Login'>
            <Navbar />

            <Stack
                spacing='50px'
                px={{ base: '64px', md: '10vw' }}
                minH='calc(100vh - 180px)'
            >
                <Center>
                    <LoginForm />
                </Center>
            </Stack>
        </Page>
    );
}
