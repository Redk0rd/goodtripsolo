import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import HeaderRentPage from '../ui/RentPageUi/HeaderRentPage';
import './center.css';
import AddEquipPage from './AddEquipPage';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllEquipmentCategoryThunk } from '../../redux/slices/equipment/equipmentCategoryThunkAction';
import { getAllEquipmentThunk } from '../../redux/slices/equipment/equipmentThunkActions';

type Props = {};

export default function RentPage({}: Props) {

const dispatch = useAppDispatch()

const category = useAppSelector((state) => state.equipment.category)
const equipmenty = useAppSelector((state) => state.equipment.equipment)

console.log('-------->>>,', category, '---------------->', equipmenty);

useEffect(() => {

  void dispatch(getAllEquipmentThunk({id: 0, offset: 0}))

  void dispatch(getAllEquipmentCategoryThunk())


}, [])



  return (
    <Box className="center_100">
      <HeaderRentPage />
    </Box>
  );
}
