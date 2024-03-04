import React, { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllCategoryTourThunk } from '../../redux/thunkActions/categoryTourThunkActions';
import { getAllTourThunk } from '../../redux/thunkActions/tourThunkActions';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const tours = useAppSelector((state) => state.tour.tours);

  useEffect(() => {
    void dispatch(getAllTourThunk(0));
  }, []);

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
