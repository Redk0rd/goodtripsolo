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
        className='bg_motion'
      >
        <Box className="bg" bg={useColorModeValue('', 'gray.900')}>
          <Text fontSize="3xl" fontWeight="bold" align="center" mb={4} color="white">
            Регистрация
          </Text>

          <form onSubmit={submitHandler}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel color="white">Name</FormLabel>
                <Input className="input_sign" placeholder="Name" name="name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Email</FormLabel>
                <Input className="input_sign" type="email" name="email" placeholder="Email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Password</FormLabel>
                <Input
                  className="input_sign"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </FormControl>

              <Button type="submit" m={4}>
                Create Account
              </Button>
            </VStack>
          </form>
        </Box>
      </motion.div>
    </Flex>
  );
}
