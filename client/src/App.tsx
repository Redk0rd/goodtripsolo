import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Root from './components/Root';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHook';
import PrivateRouter from './components/HOCs/PrivateRouter';
import ToursPage from './components/pages/ToursPage';
import RentPage from './components/pages/RentPage';
import BlogPage from './components/pages/BlogPage';
import FaqPage from './components/pages/FaqPage';
import UserPage from './components/pages/UserPage';
import { checkTokenThunk } from './redux/slices/auth/authThunkActions';
import OneTourPage from './components/pages/OneTourPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    void dispatch(checkTokenThunk());
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/tours', element: <ToursPage /> },
        { path: '/rent', element: <RentPage /> },
        { path: '/blog', element: <BlogPage /> },
        { path: '/faq', element: <FaqPage /> },
        { path: '/tours/:id', element: <OneTourPage /> },
        { path: '/user/:id', element: <UserPage /> },
      ],
    },
    {
      element: <PrivateRouter isAllowed={user.status !== 'logged'} redirect="/" />,
      children: [
        { path: '/signin', element: <SignInPage /> },
        { path: '/signup', element: <SignUpPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
