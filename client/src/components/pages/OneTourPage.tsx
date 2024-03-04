import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import type { TourType } from '../../types/tourType';
import { useAppSelector } from '../../hooks/useReduxHook';
import { formatDate } from '../../utils/dataFormater';

type OneTourPageProps = {
  tour: TourType;
};

export default function OneTourPage() {
  const { id } = useParams();
  const tours = useAppSelector((state) => state.tour.tours);

  // Преобразуем id в число для сравнения, если ваши ID представлены числами
  const tour = tours.find((tour) => tour.id === Number(id));

  const formattedStartDate = formatDate(tour.date);
  const formattedEndDate = formatDate(tour.endDate);

  return (
    <Container h="80vh">
      <h1>name :{tour?.name}</h1>
      <img src={tour?.pathImg} />
      <p> desription: {tour?.description}</p>
      <p>price: {tour?.price}</p>
      <p>
        dates: {formattedStartDate}-{formattedEndDate}
      </p>
      <p>author: {tour?.User?.name}</p>
      <p>Location:{tour?.location}</p>
      <p>type:{tour?.CategoryTour?.name}</p>
      <p>slots:{tour?.places}</p>
    </Container>
  );
}
