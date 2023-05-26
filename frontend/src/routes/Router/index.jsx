import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import ProtectedRoute, { USER_TYPES } from '../ProtectedRoute';
import LandingPage from '../../pages/LandingPage';
import LoginPage from '../../pages/LoginPage';
import ProfilePage from '../../pages/ProfilePage';

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
        path: '/login',
        element: (
          <ProtectedRoute allowed_users={USER_TYPES.NOT_SIGNED_IN}>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute allowed_users={USER_TYPES.SIGNED_IN}>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
