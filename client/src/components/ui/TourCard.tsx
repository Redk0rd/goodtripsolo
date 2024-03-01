import React from 'react';
import type { TourType } from '../../types/tourType';

type TourCardPropType = {
  tour: TourType;
};

export default function TourCard({ tour }: TourCardPropType) {
  return <div>TourCard</div>;
}
