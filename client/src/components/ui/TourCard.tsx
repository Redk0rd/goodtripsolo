import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import type { TourType } from '../../types/tourType';
import { formatDate } from '../../utils/dataFormater';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import {
  addFavoriteThunk,
  deleteFavoriteThunk,
} from '../../redux/slices/favorites/favoriteThunkActions';

type TourCardPropType = {
  tour: TourType;
};

export default function TourCard({ tour }: TourCardPropType): JSX.Element {
  const formattedStartDate = formatDate(tour.date);
  const formattedEndDate = formatDate(tour.endDate);
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state)=> state.favorite.isFavorite)
  const submitNadler = (e: React.MouseEvent<HTMLButtonElement>, id: TourType['id']): void => {
    e.preventDefault();
    void dispatch(addFavoriteThunk(id));
   
  };
  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>, id: TourType['id']): void => {
    e.preventDefault();
    void dispatch(deleteFavoriteThunk(id));
    
  };

  return (
    <Card maxW="sm" borderRadius="20px">
      <CardBody>
        <Image src={`${import.meta.env.VITE_APP_BASE_IMG}/${tour.pathImg}`} alt="Green double couch with wooden legs" borderRadius="lg" />
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
          <Avatar src={tour?.author?.pathImg} />
          <Box ml="3">
            <Text fontWeight="bold">
              {tour.author?.name}
              <Badge ml="1" variant="outline" colorScheme="green">
                PRO
              </Badge>
            </Text>
            <Text fontSize="sm">Рейтинг</Text>
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
          {!isFavorite ?
          
          <Button
            onClick={(e) => submitNadler(e, Number(tour.id))}
            variant="solid"
            colorScheme="blue"
          >
            Добавить в избранное
          </Button> :
          <Button
            onClick={(e) => deleteHandler(e, Number(tour.id))}
            variant="solid"
            colorScheme="red"
          >
            Удалить избранное
          </Button>
        }
          <Button variant="ghost" colorScheme="blue" as={Link} to={`/tours/${tour.id}`}>
            Подробнее
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
