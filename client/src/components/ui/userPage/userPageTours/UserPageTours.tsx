import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import './userPageToursStyle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TourCard from '../../TourCard';
import 'swiper/css';

export default function UserPageTours(): JSX.Element {
  return (
    <Box className="wrapper_tours">
      <Box>
        <Box className="container_tours_flex">
          <Text className="main_title">Мои туры:</Text>

          <Flex className="flex_column">
            <Text className="text_description_who">участник</Text>

            <SimpleGrid columns={2} spacing={10}>
              {Array.from({ length: 5 }).map((_, i) => (
                <TourCard />
              ))}
            </SimpleGrid>
          </Flex>

          <Flex className="flex_column">
            <Text className="text_description_who">организатор</Text>

            <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
              {Array.from({ length: 5 }).map((_, i) => (
                <TourCard />
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
