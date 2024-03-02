import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export default function AboutUsTop(): JSX.Element {
  return (
    <Box className="wrappre_container" bg="#714e3b">
      <Flex className="container">
        <Text className="main_title">Преимущества GoodTrip?</Text>
        <Flex className="wrapper_img_and_text" bg="#714e3b">
          <Box position="relative" className="img_wrapper">
            <Image
              className="img_top"
              src="https://i.pinimg.com/736x/76/a6/9e/76a69e161a7e2b0ae2986a6632ed42a1.jpg"
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
