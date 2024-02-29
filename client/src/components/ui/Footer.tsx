import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text>© 2024 GOODTRIP. Все права защищены.</Text>
        <Link href="mailto:your-email@example.com" color="teal.500">
          your-email@example.com
        </Link>
      </Flex>
    </Box>
  );
}
