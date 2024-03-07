import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { getOneEquipThunk } from '../../../redux/slices/equipment/equipmentThunkActions';
import AboutEquip from './AboutEquip';
import '../center.css';
import '../OneTourPage/oneTourStyle.css';

export default function OneEquipPage() {
  const { id } = useParams();
  const equipment = useAppSelector((state) => state.equipment.oneEquipment);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getOneEquipThunk(Number(id)));
  }, []);

  if (!equipment) {
    return <h1>Equipment not found</h1>;
  }

  return (
    <Box className="one_tour_container">
      <Container className="aboutTourContainer">
        <AboutEquip equipment={equipment} />
      </Container>
    </Box>
  );
}
