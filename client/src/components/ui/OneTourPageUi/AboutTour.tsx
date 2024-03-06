import React from 'react';
import type { TourType } from '../../../types/tourType';
import { formatDate } from '../../../utils/dataFormater';
import '../../pages/OneTourPage/oneTourStyle.css';
import { Flex } from '@chakra-ui/react';

type Props = {
  tour: TourType;
};

export default function AboutTour({ tour }: Props): JSX.Element {
  const formattedStartDate = formatDate(tour.date);
  const formattedEndDate = formatDate(tour.endDate);
  return (
    <div>
      {' '}
      <h1 className="whiteTextAboutTour titleAbouTour">{tour?.name}</h1>
      <Flex justify='center' align='center'>
      <img
        className="imgAboutTour"
        src={`${import.meta.env.VITE_APP_BASE_IMG}/${tour.pathImg}`}
        alt="nu net img"
      />
      </Flex>
      <p className="whiteTextAboutTour" style={{margin: '15px 0'}}>
        {' '}
        <span className="spanAboutTour">описание:</span> {tour?.description}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">даты тура:</span> {formattedStartDate}-{formattedEndDate}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">автор тура: </span> {tour?.author.name}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">где будет тур: </span>
        {tour?.location}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">тип тура: </span>
        {tour?.CategoryTour?.name}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">кол-во мест: </span>
        {tour?.places}
      </p>
    </div>
  );
}
