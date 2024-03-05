import { Box, CloseButton, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsStyle.css';
import { NavLink } from 'react-router-dom';
import { buttonMotion, TextImgMotion } from './motion';

export default function AboutUsImgBot(): JSX.Element {
  return (
    <Box className="wrapper_container_mainPage_imgBot">
      <Image className="img_top_bot" src="../../../../public/forest.jpeg" alt="Dan Abramov" />
      <Box className="wrapper_img_absolute">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <Flex direction='column'>
          <Text className="title_M" as={motion.button} custom={0.3} variants={TextImgMotion}>
            Посмотрим туры?
          </Text>
          <Box as={motion.button} custom={0.9} variants={buttonMotion}>
            <NavLink to="/tours">
              <button type="button" className="btn-white">
                Да, конечно!
              </button>
            </NavLink>
          </Box>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}
