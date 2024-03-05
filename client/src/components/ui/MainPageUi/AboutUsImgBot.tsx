import { Box, Flex, Image, SkipNavLink, Text } from '@chakra-ui/react';
import React from 'react';
import './AboutUsStyle.css';
import { NavLink } from 'react-router-dom';
import { textAnimation, textAnimation2, textAnimationTitle, containerOpen } from './motion';

export default function AboutUsImgBot(): JSX.Element {
  return (
    <Box className="wrapper_container_mainPage_imgBot">
      <Image className="img_top_bot" src="../../../../public/forest.jpeg" alt="Dan Abramov" />
      <Box className='wrapper_img_absolute' >
      <Text className='title_M'>Посмотрим туры?</Text>
        <NavLink to="/tours">
          <button type="button" className="btn-white">
            Да, посмотрим
          </button>
        </NavLink>
      </Box>
    </Box>
  );
}
