import React, { useEffect } from 'react';
import { Box, Button, Flex, Heading, Select, SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
import './center.css';
import HeaderToursPage from '../ui/ToursPageUi/HeaderToursPage';
import { getAllCategoryTourThunk } from '../../redux/slices/categoryTour/categoryTourThunkActions';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const tours = useAppSelector((state) => state.tour.tours);
  const categories = useAppSelector((state) => state.tour.category);

  const allCount = useAppSelector((state) => state.tour.allCount)

  const offset = useAppSelector((state) => state.tour.offset);

  useEffect(() => {
    void dispatch(getAllTourThunk({ id: 0, offset: 0 }));
    void dispatch(getAllCategoryTourThunk())
  }, []);

  return (
    <Box className="center_100">
      <HeaderToursPage />
      <Select placeholder="Выберите тур">
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option> // eslint-disable-line react/jsx-key
        ))}
      </Select>
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
