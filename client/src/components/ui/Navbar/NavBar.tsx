import { Avatar, Box, Button, Flex, HStack, Image, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { logOutThunk } from '../../../redux/slices/auth/authThunkActions';
import './navStyle.css';

export default function NavBar(): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const logoutHandler = (): void => {
    void dispatch(logOutThunk());
  };
  return (
    <Box className="nav_center">
        <Box className="hundred" bg="transparent" px={4} fontSize={20}>
          <Flex h={24} alignItems="center" justifyContent="space-between">
            <HStack className="margin nav_text  nav_logo_box" as={NavLink} to="/">
              <Box fontSize={30}>
                GOOD
              </Box>
              <Image className="nav_logo" src="/GoodTripLOGO.svg" />
              <Box fontSize={30}>TRIP</Box>
            </HStack>
            <HStack className="margin " spacing={6} color="black">
              <NavLink to="/tours" className="nav_text">
                Туры
              </NavLink>
              <NavLink to="/rent" className="nav_text">
                Аренда
              </NavLink>
              <NavLink to="/blog" className="nav_text">
                Блог
              </NavLink>
              <NavLink to="/faq" className="nav_text">
                FAQ
              </NavLink>
            </HStack>
            <HStack className="margin" spacing={6} color="black">
              {user && user.status !== 'logged' ? ( // Исправлена проверка наличия пользователя
                <>
                  <NavLink to="/signin" className="nav_sign">
                    Войти
                  </NavLink>
                  <NavLink to="/signup" className="nav_sign">
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
    </Box>
  );
}
