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

const monthNames = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сент',
  'окт',
  'нояб',
  'дек',
];

const formatDate = (date: string):string => {
  const d = new Date(date);
  const day = d.getDate();
  const monthName = monthNames[d.getMonth()];
  return `${day} ${monthName}`;
};

export default function TourCard({ tour }: TourCardPropType): JSX.Element {
  const formattedStartDate = formatDate(tour.date);
  const formattedEndDate = formatDate(tour.endDate);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={tour.pathImg} alt="Green double couch with wooden legs" borderRadius="lg" />
        <Badge ml="1" fontSize="0.8em" colorScheme="green">
          {tour.location}
        </Badge>
        <Badge ml="1" fontSize="0.8em" colorScheme="purple">
          {tour.CategoryTour?.name}
        </Badge>
        <Heading mt="4" size="md">
          {tour.name}
        </Heading>
        <Flex mt="4">
          <Avatar src={tour.User?.pathImg} />
          <Box ml="3">
            <Text fontWeight="bold">
              {tour.User?.name}
              <Badge ml="1" variant="outline" colorScheme="green">
                PRO
              </Badge>
            </Text>
            <Text fontSize="sm">Рейтинг 4,8</Text>
          </Box>
        </Flex>
        <Flex justify="space-between">
          <Text mt="2" color="blue.600" fontSize="2xl">
            {formattedStartDate}-{formattedEndDate}
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
