import { Avatar, Box, Button, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { logOutThunk } from '../../redux/thunkActions/authThunkActions';

export default function NavBar(): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const logoutHandler = (): void => {
    void dispatch(logOutThunk());
  };
  return (
    <Box bg="transparent" px={4} fontSize={20}>
      <Flex h={24} alignItems="center" justifyContent="space-between">
        <HStack spacing={6} color="black">
          <Box>Hi, {user.status === 'logged' ? user.username : 'guest'}</Box>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Туры
          </NavLink>
          <NavLink to="/rent" className={({ isActive }) => (isActive ? 'active' : '')}>
            {' '}
            {/* Исправлено на /rent для Аренды */}
            Аренда
          </NavLink>
        </HStack>
        <HStack>
        <Avatar
                as={NavLink}
                to={`/user/${user.id}`} 
                size="lg"
                src="../../../public/logo.svg"
              />
              <Box fontSize={30}>GOODTRIP</Box>
        </HStack>
        <HStack spacing={6} color="black">
          {user && user.status !== 'logged' ? ( // Исправлена проверка наличия пользователя
            <>
            
              <NavLink to="/signin" className={({ isActive }) => (isActive ? 'active' : '')}>
                Войти
              </NavLink>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>
                Зарегистрироваться
              </NavLink>
            </>
          ) : (
            <>
              <Avatar
                as={NavLink}
                to={`/user/${user.id}`} 
                size="sm"
                src="https://www.svgrepo.com/download/6595/beer.svg"
              />
              <Button onClick={logoutHandler}>Выйти</Button>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}
