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
  Heading,
  Image,
  Text,
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
          {tour.location}
        </Badge>
        <Badge ml="1" fontSize="0.8em" colorScheme="purple">
          {tour.catTId}
        </Badge>
        <Heading mt="4" size="md">
          {tour.name}
        </Heading>
        <Flex mt="4">
          <Avatar src={tour} />
          <Box ml="3">
            <Text fontWeight="bold">
              {tour.authorId}
              <Badge ml="1" variant='outline' colorScheme="green">
                PRO
              </Badge>
            </Text>
            <Text fontSize="sm">Рейтинг 4,8</Text>
          </Box>
        </Flex>
        <Flex justify = 'space-between'>
          <Text mt="2" color="blue.600" fontSize="2xl">
            {tour.date}-{tour.endDate}
          </Text>
          <Text mt="2" color="blue.600" fontSize="2xl">
            Места: {tour.places}
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
