import { Box, SimpleGrid, Container, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import AboutUsTop from '../ui/MainPageUi/AboutUsTop';
import AboutUsMid from '../ui/MainPageUi/AboutUsMid';
import AboutUsBot from '../ui/MainPageUi/AboutUsBot';
import AboutUsImgBot from '../ui/MainPageUi/AboutUsImgBot';
import ImgUnderHeader from '../ui/MainPageUi/ImgUnderHeader';
import '../ui/MainPageUi/AboutUsStyle.css';
import SliderPhotoTopPage from '../ui/MainPageUi/Slider/SliderPhotoTopPage';
import { useAppSelector } from '../../hooks/useReduxHook';

export default function MainPage(): JSX.Element {
  return (
    <Box mt={0} p={0}>
      {/* <SliderPhotoTopPage /> */}
      <ImgUnderHeader />
      <Box className='bgMainPage'>
        <AboutUsTop />
        <AboutUsMid />
        <AboutUsBot />
      </Box>
      <AboutUsImgBot />
    </Box>
  );
}
