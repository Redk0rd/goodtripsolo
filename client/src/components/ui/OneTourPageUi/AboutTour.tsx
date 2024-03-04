import React from 'react';
import type { TourType } from '../../../types/tourType';
import { formatDate } from '../../../utils/dataFormater';

type Props = {
  tour: TourType;
};

export default function AboutTour({ tour }: Props): JSX.Element {
  const formattedStartDate = formatDate(tour.date);
  const formattedEndDate = formatDate(tour.endDate);
  return (
    <div>
      {' '}
      <h1>name :{tour?.name}</h1>
      <img src={tour?.pathImg} alt="nu net img" />
      <p> desription: {tour?.description}</p>
      <p>
        dates: {formattedStartDate}-{formattedEndDate}
      </p>
      <p>author: {tour?.User?.name}</p>
      <p>Location:{tour?.location}</p>
      <p>type:{tour?.CategoryTour?.name}</p>
      <p>slots:{tour?.places}</p>
    </div>
  );
}
