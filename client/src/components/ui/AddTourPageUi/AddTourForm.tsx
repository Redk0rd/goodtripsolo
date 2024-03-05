import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { Form } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddTourForm(): JSX.Element {
  return (
    <Box maxW="70vh">
      <Form>
        <FormControl>
          <FormLabel>Название тура</FormLabel>
          <Input type="text" />
          <FormHelperText>введите название своего тура чтобы привлечь туристов</FormHelperText>
          <FormLabel>Локация</FormLabel>
          <Input type="text" />
          <FormHelperText>опишите локацию где будет проходить тур</FormHelperText>
          <FormLabel>Описание тура</FormLabel>
          <div className="App">
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event) => {
                console.log(event);
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <FormHelperText>добавьте подроное описание тура</FormHelperText>
          <FormLabel>Выберете тип тура</FormLabel>
          <Select placeholder="Тип тура">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <FormHelperText>Дата начала тура</FormHelperText>
          <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
          <FormHelperText>Дата окончания тура</FormHelperText>
          <Input placeholder="Select Date and Time" size="md" type="datetime-local" /> 
          <FormHelperText>Укажите колчисство мест</FormHelperText>
          <NumberInput size="md" maxW={24} defaultValue={15} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Form>
    </Box>
  );
}
