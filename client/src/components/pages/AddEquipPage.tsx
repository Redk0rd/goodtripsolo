import { Box } from '@chakra-ui/react';
import React from 'react';
import HeaderAddPage from '../ui/AddTourPageUi/HeaderAddPage';
import './Styles/AddPageStyle.css';
import AddEquipForm from '../ui/AddEquipPageUi/AddEquipForm';

type Props = {};

export default function AddEquipPage({}: Props) {
  return (
    <Box className="center_100_AddPage">
      <Box className='center_zad'>
      <HeaderAddPage head="Добавить оборудование" />
      <AddEquipForm/>
      </Box>
    </Box>
  );
}
