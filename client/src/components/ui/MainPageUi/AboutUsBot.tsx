import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsStyle.css';
import { textAnimation, textAnimation2, textAnimationTitle, containerOpen } from './motion';

export default function AboutUsTop(): JSX.Element {
  return (
    <Box className="wrappre_container" bg="#714e3b">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={containerOpen}
        custom={0.8}
        transition={{ duration: 2 }}
      >
        <Flex className="container">
          <Text as={motion.h1} className="main_title" custom={1} variants={textAnimationTitle}>
            Преимущества GoodTrip?
          </Text>
          <Flex className="wrapper_img_and_text" bg="#714e3b">
            <Box position="relative" className="img_wrapper">
              <Image
                className="img_top"
                src="https://i.pinimg.com/736x/76/a6/9e/76a69e161a7e2b0ae2986a6632ed42a1.jpg"
                alt="Dan Abramov"
              />
            </Box>
            <Flex className="text_wrapper_flex" bg="#714e3b">
              <Text as={motion.h1} className="title" custom={0.8} variants={textAnimation}>Что такое GoodTrip?</Text>
              <Text className="description" as={motion.h1} custom={1.5} variants={textAnimation2}>
                GoodTrip — проект о приключениях, свершениях, преодолениях и победах. Мы верим, что
                путешествия — лучший способ познания мира и самого себя.
              </Text>
              <Text as={motion.h1} className="title" custom={0.8} variants={textAnimation}>Почему вам втоит выбрать GoodTrip?</Text>
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
