import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';

type Props = {};

export default function ToursPage({}: Props): JSX.Element {
  return (
    <div>
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
        {Array.from({ length: 5 }).map((_, i) => (
          <TourCard />
        ))}
      </SimpleGrid>
    </div>
  );
}
