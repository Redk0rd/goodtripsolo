import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import '../../pages/Styles/ToursStyle.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useReduxHook';

export default function HeaderToursPage(): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Flex className="HeaderToursPage_style">
      <Box>
        <Flex direction="column" align="center" justify="center">
          <Heading
            color="white"
            as="h1"
            fontSize="45px"
            noOfLines={1}
            textAlign="center"
            zIndex={1}
          >
            Доступные туры
          </Heading>
          {user.status === 'logged' ? (
            <Link to="/addtour">
              <button type="button" className="button">
                Добавить тур
              </button>
            </Link>
          ) : (
            <></>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
