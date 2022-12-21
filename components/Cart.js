import { Button, Center, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import formatPrice from '../utils/formatPrice';
import OrderCard from './OrderCard';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const handlePay = () => {
    const data = {
      transaction_details: {
        order_id: 'John Doe'.replace(' ', '-') + '-' + Date.now(),
        gross_amount: cart.reduce((acc, item) => acc + item.price, 0),
        payment_link_id: 'John Doe'.replace(' ', '-') + '-' + Date.now(),
      },
      credit_card: {
        secure: true,
      },
      usage_limit: 1,
      enabled_payments: ['credit_card', 'bca_va', 'indomaret'],
      item_details: cart.map((item, index) => {
        return {
          id: item.name + index,
          name: item.name,
          price: item.price,
          quantity: 1,
        };
      }),
      customer_details: {
        first_name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '82123213',
        address: 'Jl. ABC No. 123',
      },
    };

    fetch('https://api.sandbox.midtrans.com/v1/payment-links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Basic U0ItTWlkLXNlcnZlci1KSklWQ2VUci03dEh6eDg0LVZzLXFXODENCg==',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = data.payment_url;
      });
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    setCartLength(JSON.parse(localStorage.getItem('cartLength')));
  }, []);

  return (
    <>
      {cart ? (
        <Stack w='100%'>
          <Center w='100%' mb={8}>
            <Text fontSize='2xl' fontWeight='bold'>
              Shopping Cart ({cartLength})
            </Text>
          </Center>
          <HStack alignItems='start' justifyContent='space-around'>
            <Stack spacing={8}>
              {cart?.map((product, index) => (
                <OrderCard product={product} key={product.name + index} />
              ))}
            </Stack>
            <Stack w='40%' spacing={8}>
              <Stack bg='#DBDBDB' w='100%' spacing={2} p={4}>
                <Text fontSize='xl' fontWeight='medium'>
                  ORDER SUMMARY
                </Text>
                <HStack justifyContent='space-between'>
                  <Text fontSize='md'>Total Item:</Text>
                  <Text fontSize='md'>{cartLength}</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                  <Text fontWeight='bold' fontSize='md'>
                    Total Price:
                  </Text>
                  <Text fontWeight='bold' fontSize='md'>
                    {formatPrice(
                      cart.reduce((acc, curr) => acc + curr.price, 0)
                    )}
                  </Text>
                </HStack>
              </Stack>
              <Button color='white' bg='red.500' py={6} onClick={handlePay}>
                Checkout
              </Button>
            </Stack>
          </HStack>
        </Stack>
      ) : (
        <Text>No cart at the moment.</Text>
      )}
    </>
  );
};

export default Cart;
