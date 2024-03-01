import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import React from 'react';
import './AboutUsStyle.css';

export default function AboutUsTop(): JSX.Element {
  return (
    <Box className="wrappre_container" bg="#714e3b">
      <Flex className="container">
        <Text className="main_title">Что такое GoodTrip?</Text>
        <Flex className="wrapper_img_and_text" bg="#714e3b">
          <Box position="relative" className="img_wrapper">
            <Image
              className="img_top"
              src="https://img.freepik.com/premium-photo/rain-over-forest-the-tent-of-tourists-in-the-pouring-rain_564276-12329.jpg"
              alt="Dan Abramov"
            />
          </Box>
          <Flex className="text_wrapper_flex" bg="#714e3b">
            <Text className="title">Что такое GoodTrip?</Text>
            <Text className="description">
              GoodTrip — проект о приключениях, свершениях, преодолениях и победах. Мы верим, что
              путешествия — лучший способ познания мира и самого себя.
            </Text>
            <Text className="title">Почему вам втоит выбрать GoodTrip?</Text>
            <Text className="description">
              Любите ли вы походы или никогда в них не бывали, желаете ли открывать новые места или
              уже известные с новых сторон, а может, просто ищете новые впечатления? Вам с нами по
              пути!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
