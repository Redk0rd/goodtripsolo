import React from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import { useAppSelector } from '../hooks/useReduxHook';
import AppSpinner from './ui/AppSpinner';
import Footer from './ui/Footer';

export default function Root(): JSX.Element {
  const status = useAppSelector((state) => state.auth.user.status);
  return (
    <Container maxW="container.xl">
      {status === 'pending' ? (
        <AppSpinner />
      ) : (
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
      )}
    </Container>
  );
}
