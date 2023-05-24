import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import LandingPage from '../../pages/LandingPage';
import SignInPage from '../../pages/SignInPage';
import UserPage from '../../pages/UserPage';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/user',
        element: <UserPage />,
      },
    ],
  },
]);
