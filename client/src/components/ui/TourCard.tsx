import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import type { TourType } from '../../types/tourType';

type TourCardPropType = {
  tour: TourType;
};

export default function TourCard({ tour }: TourCardPropType): JSX.Element {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          Location
        </Badge>
        <Badge ml="1" fontSize="0.8em" colorScheme="purple">
          type
        </Badge>
        <Heading mt="4" size="md">
          ЛИКИЙСКАЯ ТРОПА. ﻿«ЧЕРЕЗ ГОРЫ К МОРЮ»
        </Heading>
        <Flex mt="4">
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Box ml="3">
            <Text fontWeight="bold">
              Иван Жуков
              <Badge ml="1" colorScheme="green">
                PRO
              </Badge>
            </Text>
            <Text fontSize="sm">Рейтинг 4,8</Text>
          </Box>
        </Flex>
        <Flex justify = 'space-between'>
          <Text mt="2" color="blue.600" fontSize="2xl">
            11-20 июня
          </Text>
          <Text mt="2" color="blue.600" fontSize="2xl">
            Места: 5/10
          </Text>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Добавить в избранное
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Подробнее
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
