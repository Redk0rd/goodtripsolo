import { Box, Flex, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageToursStyle.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';

import TourCard from '../../TourCard';

export default function UserPageTours(): JSX.Element {
  return (
    <Box className="wrapper_tours">
      <Box>
        <Box className="container_tours_flex">
          <Text className="main_title">Мои туры:</Text>

          <Flex className="flex_column">
            <Text className="text_description_who">участник:</Text>

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
                    <TourCard />
                    <TourCard />
                    <TourCard />
                  </Grid>
                </Carousel.Item>
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                  </Grid>
                </Carousel.Item>
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                  </Grid>
                </Carousel.Item>
              </Carousel>
            </Box>
          </Flex>

          <Flex className="flex_column">
            <Text className="text_description_who">организатор: </Text>

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
                    <TourCard />
                    <TourCard />
                    <TourCard />
                  </Grid>
                </Carousel.Item>
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                  </Grid>
                </Carousel.Item>
                <Carousel.Item>
                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
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
