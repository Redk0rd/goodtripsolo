import React, { useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
import './center.css'

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const tours = useAppSelector((state) => state.tour.tours);

  useEffect(() => {
    void dispatch(getAllTourThunk(0));
  }, []);

  return (
    <Box className="center_100">
      <Box className="center">
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          {tours?.map((tour) => <TourCard tour={tour} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
