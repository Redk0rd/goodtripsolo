import React, { useEffect } from 'react';
import { Box, Button, Flex, Heading, Select, SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
import './center.css';
import HeaderToursPage from '../ui/ToursPageUi/HeaderToursPage';
import { getAllCategoryTourThunk } from '../../redux/slices/categoryTour/categoryTourThunkActions';
import { setSelectedCategoryTour } from '../../redux/slices/categoryTour/tourSlice';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const tours = useAppSelector((state) => state.tour.tours);

  const categories = useAppSelector((state) => state.tour.category);

  const filter = useAppSelector((state) => state.tour.filter);

  const allCount = useAppSelector((state) => state.tour.allCount);

  const offset = useAppSelector((state) => state.tour.offset);

  const handleCategoryTourChenge = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    void dispatch(setSelectedCategoryTour(Number(e.target.value)));
  };

  useEffect(() => {
    void dispatch(getAllCategoryTourThunk());
  }, []);

  useEffect(() => {
    void dispatch(getAllTourThunk({ id: filter, offset: 0 }));
  }, [filter]);

  return (
    <Box className="center_100">
      <HeaderToursPage />
      <Flex mt="10px" justify="space-between">
        <Select
          placeholder="Все туры"
          background="white"
          onChange={handleCategoryTourChenge}
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option> // eslint-disable-line react/jsx-key
          ))}
        </Select>
        <Button
          width="180px"
          colorScheme="teal"
          size="md"
          onClick={() => {
            if (offset !== allCount) {
              void dispatch(getAllTourThunk({ id: filter, offset: tours.length }));
            }
          }}
          disabled={offset === allCount}
        >
          Показать еще
        </Button>
      </Flex>

      <Box className="center" mt="10px">
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          {tours?.map((tour) => <TourCard tour={tour} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
