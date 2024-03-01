import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageAboutUserStyle.css'

export default function UserPageAboutUser(): JSX.Element {
  return (
    <Box>
      <Text>Личный кабинет:</Text>
      <Flex>
        <Box>
          <Image src="null" />
          <Button>редактировать</Button>
        </Box>
        <Box>
          <Flex>
            <Text>Имя: {null}</Text>
            <Text>О себе: {null}</Text>
            <Text>Email: {null}</Text>
            <Text>Телефон: {null}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
