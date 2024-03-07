import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
// import './style.css';
import '../../pages/Styles/ToursStyle.css';
import { Link } from 'react-router-dom';

export default function HeaderRentPage(): JSX.Element {
  return (
    <Flex className="HeaderToursPage_style">
      <Box>
        <Flex direction="column" align="center" justify="center">
          <Heading color='white' as="h1" fontSize="45px" noOfLines={1} textAlign="center" zIndex={1}>

            Доступное оборудование
          </Heading>
          <Link to="/addequip">
            <button type="button" className="button">
              Добавить оборудование
            </button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
