import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import '../../pages/Styles/AddPageStyle.css';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { getAllCategoryTourThunk } from '../../../redux/slices/categoryTour/categoryTourThunkActions';
import { addEquipThunk } from '../../../redux/slices/equipment/equipmentThunkActions';
import { getAllEquipmentCategoryThunk } from '../../../redux/slices/equipment/equipmentCategoryThunkAction';

export default function AddEquipForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.equipment.category);
  const user = useAppSelector((state) => state.auth.user);

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    catEId: '',
    price: '',
    userId: user.id,
  });
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Добавлено новое состояние для перенаправления

  useEffect(() => {
    void dispatch(getAllEquipmentCategoryThunk());
  }, []);

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      userId: user.id, // Обновите это значение при изменении user.id
    }));
  }, [user.id]); // Зависимость от user.id

  // Обработка изменения файлового поля
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'catEId' || name === 'price') {
      setFormValues((prev) => ({ ...prev, [name]: value ? Number(value) : '' }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (file) {
      formData.append('file', file);
    }

    // Отправка formData на сервер
    // Замените следующую строку на код для отправки данных формы
    console.log('FormData ready to be sent', formData);
    try {
      await dispatch(addEquipThunk(formData)).unwrap();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
    // Пример отправки formData с использованием Redux:
  };
  if (isSubmitted) {
    return <Navigate to="/rent" />;
  }
  return (
    <Box as="form" maxW="100vh" minW="70vh" onSubmit={submitHandler}>
      <FormControl>
        <FormLabel color="white" fontSize="18px">
          Наименование оборудования
        </FormLabel>
        <Input
          name="name"
          value={formValues.name}
          onChange={handleChange}
          background="#ffffff40"
          color="white"
          fontSize="18px"
          type="text"
        />
        <FormHelperText color="white" fontSize="18px">
          введите наименование оборудования
        </FormHelperText>
        <FormControl>
          <FormLabel color="white" fontSize="18px">
            Фото
          </FormLabel>
          <input type="file" name="pathImg" onChange={handleFileChange} />
        </FormControl>
        <FormLabel color="white" fontSize="18px">
          Описание оборудования
        </FormLabel>
        <Textarea
          name="description"
          value={formValues.description}
          onChange={handleChange}
          background="#ffffff40"
          color="white"
          fontSize="18px"
          placeholder=""
        />
        <FormHelperText color="white" fontSize="18px">
          добавьте подробное описание оборудования
        </FormHelperText>
        <FormLabel color="white" fontSize="18px">
          Выберете тип оборудования
        </FormLabel>
        <Select
          name="catEId"
          value={formValues.catEId}
          onChange={handleChange}
          placeholder="Тип оборудования"
          background="#ffffff40"
          color="white"
          fontSize="18px"
          typeof="number"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
         
        <FormLabel color="white" fontSize="18px">
          Стоимость
        </FormLabel>
        <Input
          name="price"
          value={formValues.price}
          onChange={handleChange}
          background="#ffffff40"
          color="white"
          fontSize="18px"
          type="number"
        />
        <FormHelperText color="white" fontSize="18px">
          укажите стоимость аренды в сутки{' '}
        </FormHelperText>
      </FormControl>
      <Flex justify="center" mt={10}>
        <Button size="lg" type="submit" mt="10px" mb="10px">
          Добавить
        </Button>
      </Flex>
    </Box>
  );
}
