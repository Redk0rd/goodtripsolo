import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageToursStyle.css';

export default function UserPageTours(): JSX.Element {
  return (
    <Box className="wrapper_tours">
      <Box>
        <Box className="container_tours_flex">
          <Text className='main_title'>Мои туры:</Text>

          <Flex className='flex_column'>
            <Text className='text_description_who'>участник</Text>
            <Box className='box'>{/* тут мапать карточки гридом ??? */}</Box>
          </Flex>

          <Flex className='flex_column'>
            <Text className='text_description_who'>организатор</Text>
            <Box className='box'>{/* тут мапать карточки гридом ??? */}</Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
