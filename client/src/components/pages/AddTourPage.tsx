import React from 'react';
import { Box } from '@chakra-ui/react';
import HeaderAddPage from '../ui/AddTourPageUi/HeaderAddPage';
import AddTourForm from '../ui/AddTourPageUi/AddTourForm';
import './Styles/AddPageStyle.css';

export default function AddTourPage(): JSX.Element {
  return (
    <Box className="center_100_AddPage">
      <Box className="center_zad">
        <HeaderAddPage head="Добавить тур" />
        <AddTourForm />
      </Box>
    </Box>
  );
}
