import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function SliderMotionTop(): JSX.Element {
  const images = [
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
    '../../../../public/logo.svg',
  ];
  return (
    <Box>
      {[...images].map((el, id) => {
        <Image />;
      })}
    </Box>
  );
}
