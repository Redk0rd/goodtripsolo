import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import type { TourType } from '../../types/tourType';
import { useAppSelector } from '../../hooks/useReduxHook';
import { formatDate } from '../../utils/dataFormater';
import AboutTour from '../ui/OneTourPageUi/aboutTour';

export default function OneTourPage(): JSX.Element {
  const { id } = useParams();
  const tours = useAppSelector((state) => state.tour.tours);

  // Преобразуем id в число для сравнения, если ваши ID представлены числами
  const tour = tours.find((el) => el.id === Number(id));
  if (!tour) {
    return <div>Tour not found</div>;
  }
 

  return (
    <Container h="80vh">
      <AboutTour tour={tour} />
    </Container>
  );
}
