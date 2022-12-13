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

const Sidebar = ({ setFilter }) => {
  return (
    <Stack spacing={4} bg='#D9D9D9' px='16px'>
      <Heading mt='32px'>Shoespedia</Heading>
      <Input placeholder='Search' variant='filled' />
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
        <option value='Vans'>Vans</option>
        <option value='Jordan'>Jordan</option>
        <option value='Under Armour'>Under Armour</option>
      </Select>
    </Stack>
  );
};

export default Sidebar;
