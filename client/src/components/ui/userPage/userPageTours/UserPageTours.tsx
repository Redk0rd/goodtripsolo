import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageToursStyle.css'

export default function UserPageTours(): JSX.Element {
  return (
    <Box>
      <Text>Мои туры:</Text>

      <Flex>
        <Text>участник</Text>
        <Box>{/* тут мапать карточки гридом ??? */}</Box>
      </Flex>

      <Flex>
        <Text>организатор</Text>
        <Box>{/* тут мапать карточки гридом ??? */}</Box>
      </Flex>
    </Box>
  );
}
