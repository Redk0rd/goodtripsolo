import { Box, SimpleGrid, Container, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import AboutUsTop from '../ui/MainPageUi/AboutUsTop';
import AboutUsMid from '../ui/MainPageUi/AboutUsMid';
import AboutUsBot from '../ui/MainPageUi/AboutUsBot';
import '../ui/MainPageUi/AboutUsStyle.css';
import SliderPhotoTopPage from '../ui/MainPageUi/SliderPhotoTopPage';

export default function MainPage(): JSX.Element {
  return (
    <Box mt={0} p={0}>
      {/* <SliderPhotoTopPage /> */}
      <AboutUsTop />
      <AboutUsMid />
      <AboutUsBot />
    </Box>
  );
}
