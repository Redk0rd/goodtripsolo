import React, { useEffect, useLayoutEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { Box, Button, Flex, HStack, Heading, Select, SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
import './Styles/ToursStyle.css';
import HeaderToursPage from '../ui/ToursPageUi/HeaderToursPage';
import { getAllCategoryTourThunk } from '../../redux/slices/categoryTour/categoryTourThunkActions';
import {
  changeCategoryTour,
  setCleanTour,
  setSelectedCategoryTour,
} from '../../redux/slices/categoryTour/tourSlice';
import { getFavoritesToursThunk } from '../../redux/slices/favorites/favoriteThunkActions';

const MemoizedToursPage = React.memo(() => {
  const dispatch = useAppDispatch();

  const tours = useAppSelector((state) => state.tour.tours);
  const categories = useAppSelector((state) => state.tour.category);
  const filter = useAppSelector((state) => state.tour.filter);
  const allCount = useAppSelector((state) => state.tour.allCount);
  const offset = useAppSelector((state) => state.tour.offset);

  const favoritesTours = useAppSelector((state) => state.favorite.favTours);
  // console.log(favoritesTours, '-----------------------------------------------------')

  const handleCategoryTourChenge = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    void dispatch(setSelectedCategoryTour(Number(e.target.value)));
    void dispatch(changeCategoryTour());
  };

  useLayoutEffect(() => {
    void dispatch(getAllCategoryTourThunk());
    void dispatch(getFavoritesToursThunk());
    return () => {
      dispatch(setCleanTour());
    };
  }, []);

  useEffect(() => {
    void dispatch(getAllTourThunk({ id: filter, offset }));
  }, [filter]);

  const handleScroll = () => {
    const windowHeight =
      'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight && offset !== allCount) {
      dispatch(getAllTourThunk({ id: filter, offset: tours.length }));
    }
  };

  // Используем useEffect для добавления и удаления слушателя события прокрутки
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, offset, allCount, filter, tours.length]);

  return (
    <Box className="center_100_TourStule">
      <HeaderToursPage />
      <Flex mt="10px" justify="space-between">
        <HStack spacing={3} m={10}>
          <Select placeholder="Все туры" background="#ffffffd0" onChange={handleCategoryTourChenge}>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option> // eslint-disable-line react/jsx-key
            ))}
          </Select>
          {/* <Button
            width="180px"
            background="#ffffffd0"
            size="md"
            onClick={() => {
              if (offset !== allCount) {
                void dispatch(getAllTourThunk({ id: filter, offset: tours.length }));
              }
            }}
            disabled={offset === allCount}
          >
            Показать еще
          </Button> */}
        </HStack>
      </Flex>

      <Box className="center" mt="10px">
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          {tours?.map((tour) => <TourCard favoritesTours={favoritesTours} tour={tour} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
});

export default MemoizedToursPage;
