import { Box, CloseButton, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsStyle.css';
import { NavLink } from 'react-router-dom';
import { buttonMotion, buttonMotionR, TextFromTop } from './motion';

export default function AboutUsImgBot(): JSX.Element {
  return (
    <Box className="wrapper_container_mainPage_imgBot">
      <Image className="img_top_bot" src="../../../../public/forest.jpeg" alt="Dan Abramov" />
      <Box className="wrapper_img_absolute">
        <motion.div className='w100' initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
          <Flex className='flex_card_btn_top'>
            <Flex direction="column">
              <Flex>
                {['П', 'о', 'с', 'м', 'о', 'т', 'р', 'и', 'м', ' ', 'Т', 'у', 'р', 'ы', '?'].map(
                  (letter, index) => (
                    <Text
                      key={index}
                      className="title_M"
                      as={motion.p}
                      custom={1 + index / 10} // Предполагаем, что каждая буква должна быть видна с небольшой задержкой
                      variants={TextFromTop}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </Text>
                  ),
                )}
              </Flex>

              <Box as={motion.button} custom={0.9} variants={buttonMotion}>
                <NavLink to="/tours">
                  <button type="button" className="btn-white">
                    Да, конечно!
                  </button>
                </NavLink>
              </Box>
            </Flex>
            <Flex direction="column">
              <Flex>
                {['Е', 'с', 'т', 'ь', ' ', 'в', 'о', 'п', 'р', 'о', 'с', 'ы', '?'].map(
                  (letter, index) => (
                    <Text
                      key={index}
                      className="title_M"
                      as={motion.p}
                      custom={1 + index / 10} // Предполагаем, что каждая буква должна быть видна с небольшой задержкой
                      variants={TextFromTop}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </Text>
                  ),
                )}
              </Flex>

              <Box as={motion.button} custom={0.9} variants={buttonMotionR}>
                <NavLink to="/faq">
                  <button type="button" className="btn-white">
                    Перейти на FAQ
                  </button>
                </NavLink>
              </Box>
            </Flex>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}
