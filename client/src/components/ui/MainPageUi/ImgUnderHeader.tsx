import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsStyle.css';
import { NavLink } from 'react-router-dom';
import { TextImgMotion, TextLitera, TextLiteraLeft } from './motion';

export default function ImgUnderHeader(): JSX.Element {
  return (
    <Box className="wrapper_container_mainPage_imgTop">
      <Image
        className="img_top_bot"
        src="../../../../public/topMainPageImg.jpeg"
        alt="Dan Abramov"
      />
      <Box className="wrapper_img_absolute">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          custom={0.8}
        >
          <Flex direction="column">
            <Text className="title" as={motion.button} custom={0.5} variants={TextImgMotion}>
              Уникальные путешествия по России и Миру
            </Text>

            <Flex align="center" justify="center">
              {['G', 'o', 'o', 'd', 'T', 'r', 'i', 'p'].map((letter, index) => (
                <Text
                  key={index}
                  className="title_XL"
                  as={motion.p}
                  custom={1.2 + index / 10} // Предполагаем, что каждая буква должна быть видна с небольшой задержкой
                  variants={index < 4 ? TextLiteraLeft : TextLitera}
                >
                  {letter}
                </Text>
              ))}
            </Flex>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}
