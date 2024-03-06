import { Box } from '@chakra-ui/react';
import React from 'react';
import HeaderRentPage from '../ui/RentPageUi/HeaderRentPage';
import './center.css';
import AddEquipPage from './AddEquipPage';

type Props = {};

export default function RentPage({}: Props) {
  return (
    <Box className="center_100">
      <HeaderRentPage />
    </Box>
  );
}
