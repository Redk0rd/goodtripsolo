import React, { useEffect, useLayoutEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { Box, Button, Flex, HStack, Heading, Select, SimpleGrid } from '@chakra-ui/react';
import TourCard from '../ui/TourCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
import './center.css';
import HeaderToursPage from '../ui/ToursPageUi/HeaderToursPage';
import { getAllCategoryTourThunk } from '../../redux/slices/categoryTour/categoryTourThunkActions';
import {
  changeCategoryTour,
  setCleanTour,
  setSelectedCategoryTour,
} from '../../redux/slices/categoryTour/tourSlice';

const MemoizedToursPage = React.memo(() => {
  const dispatch = useAppDispatch();

  const tours = useAppSelector((state) => state.tour.tours);
  const categories = useAppSelector((state) => state.tour.category);
  const filter = useAppSelector((state) => state.tour.filter);
  const allCount = useAppSelector((state) => state.tour.allCount);
  const offset = useAppSelector((state) => state.tour.offset);

  const handleCategoryTourChenge = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    void dispatch(setSelectedCategoryTour(Number(e.target.value)));
    void dispatch(changeCategoryTour());
  };

  useLayoutEffect(() => {
    void dispatch(getAllCategoryTourThunk());
    return () => {
      dispatch(setCleanTour());
    };
  }, []);

  useEffect(() => {
    void dispatch(getAllTourThunk({ id: filter, offset }));
  }, [filter]);

  return (
    <Box className="center_100">
      <HeaderToursPage />

      
      

      <Flex mt="10px" justify="space-between">
        <HStack spacing={3}>
          <Select placeholder="Все туры" background="white" onChange={handleCategoryTourChenge}>
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
        </HStack>
      </Flex>

      <Box className="center" mt="10px">
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          {tours?.map((tour) => <TourCard tour={tour} key={tour.id} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
});

export default MemoizedToursPage;

// пиписька для скрола ануса

// import React, { useEffect, useLayoutEffect, useState } from 'react';
// import { Box, Button, Flex, HStack, Heading, Select, SimpleGrid } from '@chakra-ui/react';
// import TourCard from '../ui/TourCard';
// import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
// import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
// import './center.css';
// import HeaderToursPage from '../ui/ToursPageUi/HeaderToursPage';
// import {
//   changeCategoryTour,
//   setCleanTour,
//   setSelectedCategoryTour,
// } from '../../redux/slices/categoryTour/tourSlice';
// import { getAllCategoryTourThunk } from '../../redux/slices/categoryTour/categoryTourThunkActions';

// const MemoizedToursPage = React.memo(() => {
//   const dispatch = useAppDispatch();

//   const tours = useAppSelector((state) => state.tour.tours);
//   const categories = useAppSelector((state) => state.tour.category);
//   const filter = useAppSelector((state) => state.tour.filter);
//   const allCount = useAppSelector((state) => state.tour.allCount);
//   const offset = useAppSelector((state) => state.tour.offset);

//   const handleCategoryTourChenge = (e: React.ChangeEvent<HTMLSelectElement>): void => {
//     e.preventDefault();
//     void dispatch(setSelectedCategoryTour(Number(e.target.value)));
//     void dispatch(changeCategoryTour());
//   };

//   const [isFetching, setIsFetching] = useState(false);

//   const handleScroll = () => {
//     const windowHeight =
//       'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
//     const { body } = document;
//     const html = document.documentElement;
//     const docHeight = Math.max(
//       body.scrollHeight,
//       body.offsetHeight,
//       html.clientHeight,
//       html.scrollHeight,
//       html.offsetHeight,
//     );
//     const windowBottom = windowHeight + window.pageYOffset;

//     if (windowBottom >= docHeight - 100 && !isFetching) {
//       // Добавьте ваш код, который должен выполниться при прокрутке вниз
//       setIsFetching(true);
//       void dispatch(getAllTourThunk({ id: filter, offset }));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isFetching]);

//   useEffect(() => {
//     if (isFetching) {
//       setIsFetching(false);
//     }
//   }, [tours]);

//   useLayoutEffect(() => {
//     void dispatch(getAllCategoryTourThunk());
//     return () => {
//       dispatch(setCleanTour());
//     };
//   }, []);

//   useEffect(() => {
//     void dispatch(getAllTourThunk({ id: filter, offset }));
//   }, [filter]);

//   return (
//     <Box className="center_100">
//       <HeaderToursPage />
//       <Flex mt="10px" justify="space-between">
//         <HStack spacing={3}>
//           <Select placeholder="Все туры" background="white" onChange={handleCategoryTourChenge}>
//             {categories?.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.name}
//               </option>
//             ))}
//           </Select>
//           {/* <Button width="180px" colorScheme="teal" size="md" disabled={isFetching}>
//             Показать еще
//           </Button> */}
//         </HStack>
//       </Flex>

//       <Box className="center" mt="10px">
//         <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
//           {tours?.map((tour) => <TourCard tour={tour} key={tour.id} />)}
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// });

// export default MemoizedToursPage;
