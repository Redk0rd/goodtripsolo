import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function HeaderRentPage(): JSX.Element {
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
            Доступное оборудование
          </Heading>
          <Link to="/addequip" >
            <button type="button" className="button">
              Добавить оборудование
            </button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
