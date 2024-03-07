import React from 'react';
import { Flex } from '@chakra-ui/react';
import type { EquipmentType } from '../../../types/equipmentType';

type Props = {
  equipment: EquipmentType;
};

export default function AboutEquip({ equipment }: Props) {
  return (
    <div>
      {' '}
      <h1 className="whiteTextAboutTour titleAbouTour">{equipment?.name}</h1>
      <Flex justify="center" align="center">
        <img
          className="imgAboutTour"
          src={`${import.meta.env.VITE_APP_BASE_IMG}/${equipment.pathImg}`}
          alt="nu net img"
        />
      </Flex>
      <p className="whiteTextAboutTour" style={{ margin: '15px 0' }}>
        {' '}
        <span className="spanAboutTour">Описание:</span> {equipment?.description}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">Вледелец: </span> {equipment?.User?.name}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">Телеграм владельца: </span> {equipment?.User?.telegram}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">тип оборудования: </span>
        {equipment?.CategoryEquipment?.name}
      </p>
      <p className="whiteTextAboutTour">
        <span className="spanAboutTour">Стоимость аренды в сутки: </span>
        {equipment?.price}
      </p>
    </div>
  );
}
