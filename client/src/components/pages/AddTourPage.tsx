import React from 'react';
import { Box } from '@chakra-ui/react';
import HeaderAddPage from '../ui/AddTourPageUi/HeaderAddPage';
import AddTourForm from '../ui/AddTourPageUi/AddTourForm';

export default function AddTourPage(): JSX.Element {
  return (
    <Box>
      <HeaderAddPage />
      <AddTourForm />
    </Box>
  );
}
