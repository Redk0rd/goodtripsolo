import React from 'react';
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
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { UserSignInType } from '../../types/authType';
import { signInThunk } from '../../redux/slices/auth/authThunkActions';
import './authStyle.css';
import { containerOpen } from '../ui/MainPageUi/motion';

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSignInType;
    void dispatch(signInThunk(data));
  };

  return (
    <Flex className="center_sign_in">
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
            Вход в аккаунт
          </Text>
          <form onSubmit={submitHandler}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="white">Email</FormLabel>
                <Input type="email" placeholder="Email" name="email" className="input_sign" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input_sign"
                />
              </FormControl>

              <Button type="submit" background='#edf2f6d1' mt={1}>
                Войти
              </Button>

              <Flex justify="space-around" w="100%">
                <NavLink to="/signup" className="have_acc">
                  нет аккаунта?
                </NavLink>

              </Flex>
            </VStack>
          </form>
        </Box>
      </motion.div>
    </Flex>
  );
}
