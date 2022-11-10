import { Box, Button, Heading, Image, Text, Input, Stack } from '@chakra-ui/react';
import React from 'react';

const LoginForm = () => {
    return (
        <Box bg='#EEE' px='32px' py='56px' w='350px' height='500px'>
            <Heading fontSize="20px" mt="8px">LOGIN</Heading>
            <Stack spacing={3}>
                <Input variant='flushed' placeholder='Username' />
                <Input variant='flushed' type={'password'} placeholder='Password' />
                <Button width='20%' mt='40px' color='white' bg='#666A73' borderRadius='100px'>
                    login
                </Button>
            </Stack>
        </Box>

    )
}

export default LoginForm