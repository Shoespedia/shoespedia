import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Sidebar = ({ setFilter, setSearch }) => {
  return (
    <Stack spacing={4} bg='#D9D9D9' px='16px'>
      <Heading mt='32px'>Shoespedia</Heading>
      <Input
        placeholder='Search'
        variant='filled'
        onChange={(e) => setSearch(e.target.value)}
      />
      <HStack justifyContent='space-between' pt='16px'>
        <Text pl='16px' fontWeight='bold'>
          Filter
        </Text>
      </HStack>
      <Select
        border='none'
        icon={<ChevronDownIcon />}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value='all'>All Brand</option>
        <option value='NIKE'>Nike</option>
        <option value='Jordan'>Jordan</option>
        <option value='ADIDAS'>Adidas</option>
        <option value='ADIDAS YEEZY'>Adidas Yeezy</option>
      </Select>
    </Stack>
  );
};

export default Sidebar;
