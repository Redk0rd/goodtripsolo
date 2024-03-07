import { Box } from '@chakra-ui/react';
import React from 'react';
import HeaderAddPage from '../ui/AddTourPageUi/HeaderAddPage';
import './center.css';
import AddEquipForm from '../ui/AddEquipPageUi/AddEquipForm';

type Props = {};

export default function AddEquipPage({}: Props) {
  return (
    <Box className="center_100">
      <HeaderAddPage head="Добавить оборудование" />
      <AddEquipForm/>
    </Box>
  );
}
