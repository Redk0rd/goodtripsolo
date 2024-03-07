import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import './AboutUsStyle.css';
import { textAnimation, textAnimation2, textAnimationTitle, containerOpen } from './motion';

export default function AboutUsTop(): JSX.Element {
  return (
    <Box className="wrapper_container_mainPage" >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={containerOpen}
        custom={0.8}
        className='black_bg'
      >
        <Flex className="container">
          <Text as={motion.h1} className="title_M" custom={1} variants={textAnimationTitle}>
            Что такое GoodTrip?
          </Text>
          <Flex className="wrapper_img_and_text">
            <Box position="relative" className="img_wrapper">
              <Image
                className="img_top"
                src="https://img.freepik.com/premium-photo/rain-over-forest-the-tent-of-tourists-in-the-pouring-rain_564276-12329.jpg"
                alt="Dan Abramov"
              />
            </Box>
            <Flex className="text_wrapper_flex">
              <Text as={motion.h1} className="title" custom={0.8} variants={textAnimation}>
                Что такое GoodTrip?
              </Text>
              <Text className="description" as={motion.h1} custom={1.5} variants={textAnimation2}>
                GoodTrip — проект о приключениях, свершениях, преодолениях и победах. Мы верим, что
                путешествия — лучший способ познания мира и самого себя.
              </Text>
              <Text as={motion.h1} className="title" custom={1.6} variants={textAnimation}>
                Почему вам втоит выбрать GoodTrip?
              </Text>
              <Text className="description" as={motion.h1} custom={2} variants={textAnimation2}>
                Любите ли вы походы или никогда в них не бывали, желаете ли открывать новые места
                или уже известные с новых сторон, а может, просто ищете новые впечатления? Вам с
                нами по пути!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
}
