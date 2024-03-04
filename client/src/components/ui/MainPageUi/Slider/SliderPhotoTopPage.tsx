import React from 'react';
import './SliderStyle.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';
import { Box, Image } from '@chakra-ui/react';

export default function SliderPhotoTopPage(): JSX.Element {
  return (
    <Box className="box_container">
      <Box className="">
        <Carousel
         interval={5000}
         indicators={false}
         controls={false}
         touch
         wrap
         slide={false}
         fade={false}
         variant="dark">
          <Carousel.Item>
            <Image src="https://interier-foto.ru/wp-content/uploads/2014/11/juzhno-chujskij-hrebet6421.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://interier-foto.ru/wp-content/uploads/panoramnoe-foto-6390.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://interier-foto.ru/wp-content/uploads/2014/11/juzhno-chujskij-hrebet6422.jpg" />
          </Carousel.Item>
        </Carousel>
      </Box>
    </Box>
  );
}
