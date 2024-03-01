import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageFeedback.css'

export default function UserPageFeedback(): JSX.Element {
  return (
    <Box>
      <Text>Отзывы о пользователе</Text>
      <Box>
        <Flex>{/* тут мапать комменты в столбик */}</Flex>
      </Box>
    </Box>
  );
}
