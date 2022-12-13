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

const Sidebar = () => {
  return (
    <Stack spacing={4} bg='#D9D9D9' px='16px'>
      <Heading mt='32px'>Shoespedia</Heading>
      <Input placeholder='Search' variant='filled' />
      <HStack justifyContent='space-between'>
        <Text pl='16px'>Filter</Text>
        <Checkbox pr='12px' />
      </HStack>
      <Select border='none' icon={<ChevronDownIcon />}>
        <option value='All Brand'>All Brand</option>
        <option value='Vans'>Vans</option>
        <option value='Jordan'>Jordan</option>
        <option value='Under Armour'>Under Armour</option>
      </Select>
    </Stack>
  );
};

export default Sidebar;
