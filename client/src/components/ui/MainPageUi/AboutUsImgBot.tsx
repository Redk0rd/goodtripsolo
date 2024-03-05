import { Box, CloseButton, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsStyle.css';
import { NavLink } from 'react-router-dom';
import { buttonMotion, TextFromTop } from './motion';

export default function AboutUsImgBot(): JSX.Element {
  return (
    <Box className="wrapper_container_mainPage_imgBot">
      <Image className="img_top_bot" src="../../../../public/forest.jpeg" alt="Dan Abramov" />
      <Box className="wrapper_img_absolute">
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
          <Flex direction="column">

            <Flex>
              <Text className="title_M" as={motion.p} custom={1} variants={TextFromTop}>
                П
              </Text>
              <Text className="title_M" as={motion.p} custom={1.1} variants={TextFromTop}>
                о
              </Text>
              <Text className="title_M" as={motion.p} custom={1.2} variants={TextFromTop}>
                с
              </Text>
              <Text className="title_M" as={motion.p} custom={1.3} variants={TextFromTop}>
                м
              </Text>
              <Text className="title_M" as={motion.p} custom={1.4} variants={TextFromTop}>
                о
              </Text>
              <Text className="title_M" as={motion.p} custom={1.5} variants={TextFromTop}>
                т
              </Text>
              <Text className="title_M" as={motion.p} custom={1.6} variants={TextFromTop}>
                р
              </Text>
              <Text className="title_M" as={motion.p} custom={1.7} variants={TextFromTop}>
                и
              </Text>
              <Text className="title_M" as={motion.p} custom={1.6} variants={TextFromTop}>
                м
              </Text>
              <Text className="title_M" as={motion.p} custom={1.5} variants={TextFromTop}>
                Т
              </Text>
              <Text className="title_M" as={motion.p} custom={1.4} variants={TextFromTop}>
                у
              </Text>
              <Text className="title_M" as={motion.p} custom={1.3} variants={TextFromTop}>
                р
              </Text>
              <Text className="title_M" as={motion.p} custom={1.2} variants={TextFromTop}>
                ы
              </Text>
              <Text className="title_M" as={motion.p} custom={1.1} variants={TextFromTop}>
                ?
              </Text>
            </Flex>

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
