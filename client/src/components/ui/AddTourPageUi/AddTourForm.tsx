import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { addTourThunk } from '../../../redux/slices/categoryTour/tourThunkActions';
import { getAllCategoryTourThunk } from '../../../redux/slices/categoryTour/categoryTourThunkActions';

export default function AddTourForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.tour.category);
  const user = useAppSelector((state) => state.auth.user);

  const nums = Array.from({ length: 20 }, (_, i) => i + 1);

  const [formValues, setFormValues] = useState({
    name: '',
    location: '',
    description: '',
    catTId: '',
    date: '',
    endDate: '',
    price: '',
    places: '',
    authorId: user.id,
  });
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Добавлено новое состояние для перенаправления

  useEffect(() => {
    void dispatch(getAllCategoryTourThunk());
  }, []);

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      authorId: user.id, // Обновите это значение при изменении user.id
    }));
  }, [user.id]); // Зависимость от user.id

  // Обработка изменения файлового поля
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'catTId' || name === 'price' || name === 'places') {
      setFormValues((prev) => ({ ...prev, [name]: value ? Number(value) : '' }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    if (file) {
      formData.append('file', file);
    }

    try {
      await dispatch(addTourThunk(formData)).unwrap(); // Используйте unwrap для обработки ошибок Redux Toolkit
      setIsSubmitted(true); // Устанавливаем isSubmitted в true после успешной отправки
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  if (isSubmitted) {
    return <Navigate to="/tours" />;
  }

  return (
    <Box as="form" maxW="100vh" minW="70vh" onSubmit={submitHandler}>
      <FormControl>
        <FormLabel>Название тура</FormLabel>
        <Input
          name="name"
          value={formValues.name}
          onChange={handleChange}
          background="white"
          type="text"
        />
        <FormHelperText>введите название своего тура чтобы привлечь туристов</FormHelperText>
        <FormControl>
          <FormLabel>Фото</FormLabel>
          <input type="file" name="pathImg" onChange={handleFileChange} />
        </FormControl>
        <FormLabel>Локация</FormLabel>
        <Input
          name="location"
          value={formValues.location}
          onChange={handleChange}
          background="white"
          type="text"
        />
        <FormHelperText>опишите локацию где будет проходить тур</FormHelperText>
        <FormLabel>Описание тура</FormLabel>
        <Textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
          background="white"
          placeholder=""
        />
        <FormHelperText>добавьте подробное описание тура</FormHelperText>
        <FormLabel>Выберете тип тура</FormLabel>
        <Select
          name="catTId"
          value={formValues.catTId}
          onChange={handleChange}
          placeholder="Тип тура"
          background="white"
          typeof="number"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <FormHelperText>Дата начала тура</FormHelperText>
        <Input
          name="date"
          value={formValues.date}
          onChange={handleChange}
          background="white"
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
        <FormHelperText>Дата окончания тура</FormHelperText>
        <Input
          name="endDate"
          value={formValues.endDate}
          onChange={handleChange}
          background="white"
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
         <FormLabel>Стоимость</FormLabel>
        <Input
          name="price"
          value={formValues.price}
          onChange={handleChange}
          background="white"
          type="number"
        />
        <FormHelperText>укажите ориентировачную стоимость тура </FormHelperText>
        <FormLabel mt="10px">Укажите колчисство мест</FormLabel>
        <Select
          name="places"
          placeholder="Количество мест"
          value={formValues.places}
          onChange={handleChange}
          background="white"
          mb="10px"
        >
          {nums.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button colorScheme="teal" size="lg" type="submit" mb='20px'>
        Добавить
      </Button>
    </Box>
  );
}
