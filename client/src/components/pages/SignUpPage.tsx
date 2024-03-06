import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { UserSignUpType } from '../../types/authType';
import { signUpThunk } from '../../redux/slices/auth/authThunkActions';
import './authStyle.css';
import { containerOpen } from '../ui/MainPageUi/motion';

export default function SignUpPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSignUpType;
    void dispatch(signUpThunk(data));
  };

  return (
    <Flex className="center_sign">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={containerOpen}
        custom={0.4}
        className="bg_motion"
      >
        <Box className="bg" bg={useColorModeValue('', 'gray.900')}>
          <NavLink to="/" className="exit_to_main">
            X
          </NavLink>
          <Text fontSize="3xl" fontWeight="bold" align="center" mb={4} color="white">
            Регистрация
          </Text>

          <form onSubmit={submitHandler}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="white">Имя</FormLabel>
                <Input className="input_sign" placeholder="Name" name="name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Эл.почта</FormLabel>
                <Input className="input_sign" type="email" name="email" placeholder="Email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Пароль</FormLabel>
                <Input
                  className="input_sign"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FormControl>

              <Button type="submit" m={1}>
                Создать аккаунт
              </Button>

              <Flex justify="space-around" w="100%">
                <NavLink to="/signin" className="have_acc">
                  войти в существующий аккаунт
                </NavLink>
                {/* <Text color='white'>/</Text> */}
                {/* <NavLink to="/" className="have_acc">
                  на главную страницу
                </NavLink> */}
              </Flex>
            </VStack>
          </form>
        </Box>
      </motion.div>
    </Flex>
  );
}
