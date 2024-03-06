import React from 'react';
import { Box } from '@chakra-ui/react';
import HeaderAddPage from '../ui/AddTourPageUi/HeaderAddPage';
import AddTourForm from '../ui/AddTourPageUi/AddTourForm';
import './center.css';

export default function AddTourPage(): JSX.Element {
  return (
    <Box className="center_100">
      <HeaderAddPage />
      <AddTourForm />
    </Box>
  );
}
