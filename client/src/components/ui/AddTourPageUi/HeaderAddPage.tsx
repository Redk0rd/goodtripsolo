import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type AddFormPropType = {
  head: string;
};

export default function HeaderAddPage({ head }: AddFormPropType): JSX.Element {
  return (
    <Flex
      h="150px"
      w="100%"
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      align="center"
      justify="center"
    >
      <Box>
        <Flex direction="column" align="center" justify="center">
          <Heading as="h1" size="xl" noOfLines={1} textAlign="center">
            {head}
          </Heading>
          <Link to="/addtour" />
        </Flex>
      </Box>
    </Flex>
  );
}
