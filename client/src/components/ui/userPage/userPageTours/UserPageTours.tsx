import { Box, Flex, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './userPageToursStyle.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';

import TourCard from '../../TourCard/TourCard';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxHook';
import { getFavoritesToursThunk } from '../../../../redux/slices/favorites/favoriteThunkActions';
import { UserStateType, UserType } from '../../../../types/authType';
import { getAllTourThunk } from '../../../../redux/slices/categoryTour/tourThunkActions';

export default function UserPageTours(): JSX.Element {
  const tours = useAppSelector((state) => state.tour.tours);
  const favoritesTours = useAppSelector((state) => state.favorite.favTours);
  const user = useAppSelector((state) => state.auth.user );
  console.log('===============>>>>>>>>>>>>>>', favoritesTours);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getFavoritesToursThunk());
  }, []);

  return (
    <Box className="wrapper_tours">
      <Box>
        <Box className="container_tours_flex">
          <Text className="main_title">Мои туры:</Text>

          <Flex className="flex_column">
            <Text className="text_description_who">Избранное:</Text>

            <Box>
              <Carousel
                interval={5000}
                indicators={false}
                touch
                wrap
                variant="dark"
                controls={false}
              >
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    {favoritesTours?.map((tour) => (
                      <TourCard favoritesTours={favoritesTours} tour={tour} />
                    ))}
                  </Grid>
                </Carousel.Item>
              </Carousel>
            </Box>
          </Flex>

          <Flex className="flex_column">
            {/* <Text className="text_description_who">участник:</Text> */}

            <Box>
              <Carousel
                interval={5000}
                indicators={false}
                touch
                wrap
                variant="dark"
                controls={false}
              >
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    {/* {tours?.map((el) => <TourCard tour={el} />)} */}
                  </Grid>
                </Carousel.Item>
              </Carousel>
            </Box>
          </Flex>

          <Flex className="flex_column">
            <Text className="text_description_who">Туры, организованные мной: </Text>

            <Box>
              <Carousel
                interval={5000}
                indicators={false}
                touch
                wrap
                variant="dark"
                controls={false}
              >
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    {tours?.filter(el=> el.authorId === user.id).map((tour) => (
                      <TourCard favoritesTours={favoritesTours} tour={tour} />
                    ))}
                  </Grid>
                </Carousel.Item>
              </Carousel>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
