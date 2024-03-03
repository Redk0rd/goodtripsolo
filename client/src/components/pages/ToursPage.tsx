import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppSelector } from '../../hooks/useReduxHook';

export default function ToursPage(): JSX.Element {



const tours = useAppSelector((state) => state.tour.tours)

  return (
    <div>
      <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
        {tours.map((tour) => (
          <TourCard tour={tour} />
        ))}
      </SimpleGrid>
    </div>
  );
}
