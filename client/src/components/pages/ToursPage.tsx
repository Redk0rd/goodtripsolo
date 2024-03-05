import React, { useEffect } from 'react';
import { Box, Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
import './center.css';
import HeaderToursPage from '../ui/ToursPageUi/HeaderToursPage';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const tours = useAppSelector((state) => state.tour.tours);

  const allCount = useAppSelector((state) => state.tour.allCount)

  const offset = useAppSelector((state) => state.tour.offset);

  useEffect(() => {
    void dispatch(getAllTourThunk({ id: 0, offset: 0 }));
  }, []);

  return (
    <Box className="center_100">
      <HeaderToursPage />
      <Box className="center">
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          
          <Button
            onClick={() => {
              if (offset !== allCount) {
               void dispatch(getAllTourThunk({ id: 0, offset: 3 }));
              }
            }}
            disabled={offset === allCount}
          >
            еще
          </Button>

          {tours?.map((tour) => <TourCard tour={tour} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
