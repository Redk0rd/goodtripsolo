import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageFeedback.css';

export default function UserPageFeedback(): JSX.Element {
  return (
    <Box className="wrapper">
      <Box className="container">
        <Text className='main_title'>Отзывы о пользователе</Text>
        <Box>
          <Flex>{/* тут мапать комменты в столбик */}</Flex>
        </Box>
      </Box>
    </Box>
  );
}
