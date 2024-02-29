import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import AppSpinner from '../ui/AppSpinner';

export default function MainPage(): JSX.Element {
  return (
    <Box mt={10}>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={2}>
        <h1>MAINPAGE</h1>
        <h1>
          GOOD TRIP
          <AppSpinner />
        </h1>
      </SimpleGrid>
    </Box>
  );
}
