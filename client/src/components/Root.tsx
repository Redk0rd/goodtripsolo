import React from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import { useAppSelector } from '../hooks/useReduxHook';
import AppSpinner from './ui/AppSpinner';

export default function Root(): JSX.Element {
  const status = useAppSelector((state) => state.auth.user.status);
  return (
    <Container maxW="container.xl" m={0} p={0}>
      {status === 'pending' ? (
        <AppSpinner />
      ) : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </Container>
  );
}
