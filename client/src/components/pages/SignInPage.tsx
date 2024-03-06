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
import { useAppDispatch } from '../../hooks/useReduxHook';
import type { UserSignInType } from '../../types/authType';
import { signInThunk } from '../../redux/slices/auth/authThunkActions';

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSignInType;
    void dispatch(signInThunk(data));
  };

  return (

    <Flex justify="center">
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Sign In
        </Text>
        <form onSubmit={submitHandler}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
              <Text mt={1} color={useColorModeValue('gray.900', 'gray.100')}>
                At least 8 characters long
              </Text>
            </FormControl>

            <Button type="submit" colorScheme="blue" w="full" mt={4}>
              sign in
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
