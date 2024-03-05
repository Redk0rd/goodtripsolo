import { Box, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { Form } from 'react-router-dom';

export default function AddTourForm(): JSX.Element {
  return (
    <Box maxW="70vh">
      <Form>
        <FormControl>
          <FormLabel>Название тура</FormLabel>
          <Input type="text" />
          <FormHelperText>введите название своего тура чтобы привлечь туристов</FormHelperText>
        </FormControl>
      </Form>
    </Box>
  );
}
