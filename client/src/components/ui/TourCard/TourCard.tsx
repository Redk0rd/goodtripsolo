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
import type { TourType } from '../../../types/tourType';
import { formatDate } from '../../../utils/dataFormater';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import {
  addFavoriteThunk,
  deleteFavoriteThunk,
} from '../../../redux/slices/favorites/favoriteThunkActions';

type TourCardPropType = {
  tour: TourType;
  favoritesTours: TourType[];
};

export default function TourCard({ tour, favoritesTours }: TourCardPropType): JSX.Element {
  const formattedStartDate = formatDate(tour.date);
  const formattedEndDate = formatDate(tour.endDate);
  const dispatch = useAppDispatch();

  const aidishki = favoritesTours.map((el) => el.id);
  const isLiked = aidishki.includes(tour.id);

  const submitNadler = (e: React.MouseEvent<HTMLButtonElement>, id: TourType['id']): void => {
    e.preventDefault();
    void dispatch(addFavoriteThunk(id));
  };
  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>, id: TourType['id']): void => {
    e.preventDefault();
    void dispatch(deleteFavoriteThunk(id));
  };

  return (
    <Card
      className="container_card_tour"
      background="#00000090"
      maxW="sm"
      borderRadius="20px"
      border="2px solid #ffffff47"
    >
      <CardBody>
        <Flex direction="column" align="center">
          <Image
            src={`${import.meta.env.VITE_APP_BASE_IMG}/${tour.pathImg}`}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Flex mt={3}>
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              {tour.location}
            </Badge>
            <Badge ml="1" fontSize="0.8em" colorScheme="purple">
              {tour.CategoryTour?.name}
            </Badge>
          </Flex>

          <Heading mt="4" size="md" color="white">
            {tour.name}
          </Heading>
          <Flex mt="4" align="center">
            <Avatar src={`${import.meta.env.VITE_APP_BASE_IMG}/${tour?.author?.pathImg}`}/>
            <Box ml="3">
              <Text fontWeight="bold" color="white">
                {tour.author?.name}{' '}
              </Text>
            </Box>
          </Flex>
          <Flex justify="space-between" direction="column">
            <Text mt="1" color="white" fontSize="2xl">
              {formattedStartDate}-{formattedEndDate}
            </Text>
            <Text color="white" fontSize="2xl">
              Места: {tour.places}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          {!isLiked ? (
            <Button
              onClick={(e) => submitNadler(e, Number(tour.id))}
              variant="solid"
              background="#ffffff47"
              color="white"
              transition=" border 0.1s" // Добавление анимации при изменении background и border
              _hover={{ border: '1px solid white' }}
            >
              Добавить в избранное
            </Button>
          ) : (
            <Button
              onClick={(e) => deleteHandler(e, Number(tour.id))}
              variant="solid"
              background="#b5262657"
              color="white"
              transition=" border 0.1s" // Добавление анимации при изменении background и border
              _hover={{ border: '1px solid white' }}
            >
              Удалить избранное
            </Button>
          )}

          <Button
            color="white"
            transition="background 0.2s, border 0.1s" // Добавление анимации при изменении background и border
            _hover={{ background: '#ffffff47', border: '1px solid white' }} // Изменение цвета фона и появление границы при наведении
            variant="ghost"
            as={Link}
            to={`/tours/${tour.id}`}
          >
            Подробнее
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
