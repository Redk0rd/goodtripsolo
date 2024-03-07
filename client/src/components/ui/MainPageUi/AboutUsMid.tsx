import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import './AboutUsStyle.css';
import { textAnimation, textAnimation2, textAnimationTitle, containerOpen } from './motion';

export default function AboutUs(): JSX.Element {
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
            Что может предложить GoodTrip?
          </Text>
          <Flex className="wrapper_img_and_text" direction="row-reverse">
            <Box position="relative" className="img_wrapper">
              <Image
                className="img_top"
                src="https://turizm.pibig.info/uploads/posts/2023-10/1697110938_turizm-pibig-info-p-neobkhodimii-nabor-v-pokhod-instagram-64.jpg"
                alt="Dan Abramov"
              />
            </Box>
            <Flex className="text_wrapper_flex">
              <Text as={motion.h1} className="title" custom={0.8} variants={textAnimation}>
                Что GoodTrip предлагает?
              </Text>
              <Text className="description" as={motion.h1} custom={1.5} variants={textAnimation2}>
                Мы организуем походы и экспедиции в уникальные и труднодоступные места нашей
                планеты, выбираем самые красивые и интересные локации и не делим мир на государства.
                Наши путешествиям могут проходить, где угодно: за полярным кругом, в сердце Африки,
                на одном из островов в Океании. Для нас нет границ!
              </Text>
              <Text as={motion.h1} className="title" custom={1.6} variants={textAnimation}>
                Что GoodTrip предоставляет?
              </Text>
              <Text className="description" as={motion.h1} custom={2} variants={textAnimation2}>
                Мы предоставляем все необходимое групповое снаряжение для конкретного путешествия,
                которое проверено в суровых походных условиях и зарекомендовало себя с лучшей
                стороны. Необходимая личная экипировка предоставляется в аренду по очень
                привлекательной цене.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Box>
  );
}
